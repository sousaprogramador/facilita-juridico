import {  useEffect } from 'react'
import { TotalKM } from './TotalKM'
import { PAGES } from '~/constants/pages'
import { ClientCount } from './ClientCount'
import { Layout } from '~/components/Layout'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { ACCESS_TOKEN } from '~/constants/tokens'
import { FirstDelivery } from './AppointmentTodayCount'
import { listStatisticsQuery, queryKeys } from '~/queries/statistics'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {
  Table,
  Spinner,
  TableRow,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  getKeyValue,
} from '@nextui-org/react'

const INTERVAL_TO_REFETCH = 2 * 60 * 1000 // 2min

export const DashboardPage = () => {
  const centerOfCeara = [-5.3265, -39.7157]
  const statistics = useQuery({
    queryFn: listStatisticsQuery,
    queryKey: [queryKeys.list],
    refetchInterval: INTERVAL_TO_REFETCH,
  })
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN)

    if (!token) navigate(PAGES.login)
  }, [])

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6" data-testid="Dashboard">
        <ClientCount total={Number(statistics?.data?.totalClients) ?? 0} />
        <FirstDelivery name={statistics.data?.firstDelivery ?? '-'} />
        <TotalKM total={statistics?.data?.sum ?? '-'} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <MapContainer center={centerOfCeara} zoom={4} style={{ height: '650px', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {statistics?.data?.rows.map((location, index) => (
              <Marker key={index} position={[location.latitude, location.longitude]}>
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div>
          <div className="overflow-x-auto">
            <Table shadow="none" classNames={{ wrapper: 'min-h-[615px] border rounded-none' }}>
              <TableHeader>
                <TableColumn key="name">Nome</TableColumn>
                <TableColumn key="latitude">Latitude</TableColumn>
                <TableColumn key="longitude">Longitude</TableColumn>
                <TableColumn key="distance">Distancia</TableColumn>
              </TableHeader>
              <TableBody
                loadingContent={<Spinner />}
                items={statistics?.data?.rows || []}
                emptyContent={!statistics.data?.rows.length ? 'Nenhum dado foi encontrado.' : ''}
              >
                {(item) => (
                  <TableRow key={item?.distance}>
                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  )
}
