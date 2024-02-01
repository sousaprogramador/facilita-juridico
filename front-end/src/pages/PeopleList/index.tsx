import React from 'react'
import { AddModal } from './AddModal'
import { Input } from '@nextui-org/react'
import { Layout } from '~/components/Layout'
import { formatter } from '~/utils/formatter.util'
import { PencilLine, Plus, Trash } from 'lucide-react'
import { PopoverDelete } from '~/components/PopoverDelete'
import { queryKeys, PeopleData, listPeopleQuery, deletePeopleMutate } from '~/queries/people'
import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  Button,
  Table,
  Spinner,
  TableRow,
  TableCell,
  TableBody,
  Pagination,
  TableColumn,
  TableHeader,
  getKeyValue,
  useDisclosure,
} from '@nextui-org/react'

export const PeopleListPage = () => {
  const [page, setPage] = React.useState<number>(1)
  const [clients, setClients] = React.useState<PeopleData[]>([] as PeopleData[])
  const [editData, setEditData] = React.useState<PeopleData | null>(null)
  const limitPerPage = 10

  const queryClient = useQueryClient()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const onEditData = (person: PeopleData) => {
    setEditData(person)
    onOpenChange()
  }

  const people = useQuery({
    queryKey: [queryKeys.list, page],
    queryFn: async () =>
      listPeopleQuery(page, limitPerPage).then((res) => {
        setClients(res.data)
        return res
      }),
    placeholderData: keepPreviousData,
  })

  const deletePeople = useMutation({
    mutationFn: deletePeopleMutate,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [queryKeys.list] })
    },
  })

  const handleSearch = (term: string) => {
    if ((!term || term === '') && people.data?.data.length) {
      const info = people.data
      setClients(info.data)
      return
    }

    const filteredClients = clients?.filter((item) =>
      Object.values(item).some((value) => String(value).toLowerCase().includes(term.toLowerCase()))
    )

    filteredClients.length && setClients(filteredClients)
  }

  const { totalPages, data } = people.data ?? {}

  return (
    <Layout>
      <div className="mb-8 flex justify-between items-center" data-testid="PeopleList">
        <Input size="sm" label="Pesquisa" onChange={(e) => handleSearch(e.target.value)} />

        <Button
          startContent={<Plus className="h-4 w-4" />}
          className="bg-emerald-700 text-white"
          onClick={onOpen}
          style={{ marginLeft: 10 }}
        >
          Nova Pessoa
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table
          shadow="none"
          bottomContent={
            totalPages ? (
              <div className="flex w-full justify-center">
                <Pagination
                  isDisabled={people.isLoading}
                  showControls
                  variant="faded"
                  page={page}
                  total={totalPages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            ) : null
          }
          classNames={{
            wrapper: 'min-h-[615px] border rounded-none',
          }}
        >
          <TableHeader>
            <TableColumn key="name">Nome</TableColumn>
            <TableColumn key="email">E-mail Comercial</TableColumn>
            <TableColumn key="phone">Contato Comercial</TableColumn>
            <TableColumn key="cood_x">Latitude</TableColumn>
            <TableColumn key="cood_y">Longitude</TableColumn>
            <TableColumn key="cep">CEP</TableColumn>
            <TableColumn key="address">Endereço</TableColumn>
            <TableColumn key="state">Estado</TableColumn>
            <TableColumn key="city">Cidade</TableColumn>
            <TableColumn key="complement">Complemento</TableColumn>
            <TableColumn key="created_at_formatted">Data do Registro</TableColumn>
            <TableColumn key="action" className="bg-zinc-50 sticky -right-4">
              AÇÕES
            </TableColumn>
          </TableHeader>
          <TableBody
            isLoading={people.isLoading || people.isPlaceholderData}
            loadingContent={<Spinner />}
            items={clients ?? []}
            emptyContent={!people.isLoading && !data?.length ? 'Nenhum dado foi encontrado.' : ''}
          >
            {(item) => (
              <TableRow key={item?.id}>
                {(columnKey) =>
                  columnKey === 'action' ? (
                    <TableCell
                      align="right"
                      className="flex items-center gap-1 justify-center sticky -right-4 bg-white min-w-[100px]"
                    >
                      <PopoverDelete
                        message="A pessoa será excluída de todos os processos em que esta atrelada. Deseja continuar?"
                        onContinue={() => deletePeople.mutate(item?.id || '')}
                        triggerButton={
                          <Button variant="light" size="sm" isIconOnly>
                            <Trash className="h4- w-4 text-red-700" />
                          </Button>
                        }
                      />

                      <Button variant="light" size="sm" isIconOnly onClick={() => onEditData(item)}>
                        <PencilLine className="h4- w-4 text-emerald-700" />
                      </Button>
                    </TableCell>
                  ) : columnKey === 'birthday' ? (
                    <TableCell className="min-w-[150px]">
                      {formatter.date(getKeyValue(item, columnKey))}
                    </TableCell>
                  ) : (
                    <TableCell className={columnKey === 'name' ? 'min-w-[250px]' : 'min-w-[150px]'}>
                      {getKeyValue(item, columnKey)}
                    </TableCell>
                  )
                }
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <AddModal
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        editData={editData}
        onRequestClosed={() => setEditData(null)}
      />
    </Layout>
  )
}
