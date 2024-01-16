/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { IMaskMixin } from "react-imask";
import { PeopleData, queryKeys, upsertPeopleMutate } from "~/queries/people";
import { getValue } from "~/utils/get-value";
import { toast } from "~/utils/toast";
import {
  AddPeopleFormData,
  addPeopleFormSchema,
} from "~/validations/schemas/people.schema";

type AddModalProps = {
  isOpen: boolean;
  editData?: PeopleData | null;
  onOpenChange?: () => void;
  onRequestClosed?: () => void;
};

const MaskedInput = IMaskMixin(({ inputRef, ...props }: any): any => (
  <Input size="md" variant="bordered" ref={inputRef} {...props} />
));

export const AddModal = ({
  isOpen,
  onOpenChange,
  editData,
  onRequestClosed,
}: AddModalProps) => {
  const queryClient = useQueryClient();

  const {
    reset,
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<AddPeopleFormData>({
    resolver: zodResolver(addPeopleFormSchema),
    defaultValues: {
      name: editData?.name ?? "",
      email: editData?.email ?? "",
      phone: editData?.phone ?? "",
      cep: editData?.cep ?? "",
      state: editData?.state ?? "",
      city: editData?.city ?? "",
      address: editData?.address ?? "",
      complement: editData?.complement ?? "",
      latitude: editData?.latitude ?? "",
      longitude: editData?.longitude ?? ""
    },
  });

  useEffect(() => {
    if (!editData?.id) return;
    Object.keys(editData)
      .filter((field) => field !== "id")
      .forEach((field) => {
        setValue(field as any, getValue(editData, field), {
          shouldDirty: true,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editData?.id]);

  const upsertPeople = useMutation({
    mutationFn: upsertPeopleMutate,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [queryKeys.list] });
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    await upsertPeople.mutate(
      {
        id: editData?.id,
        ...data,
      },
      {
        onSuccess() {
          reset();
          onOpenChange?.();
          onRequestClosed?.();
        },
        onError() {
          const message = `Ocorreu um erro ao ${editData?.id ? "editar" : "salvar"} os dados.`;
          toast(message, { type: "error", });
        },
      }
    );
  });

  const handleOnClose = (fn: () => void) => {
    fn();
    onRequestClosed?.();
    reset();
  };

  const isLoading = upsertPeople.isPending;
  
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top-center"
      backdrop="blur"
      isDismissable={false}
      size="full"
      className="overflow-y-auto"
    >
      <ModalContent>
        {(onClose) => (
          <div className="max-w-[1366px] mx-auto px-4 w-full">
            <ModalHeader className="flex flex-col gap-1">
              {editData?.id ? "Editar" : "Adicionar nova"} Pessoa
            </ModalHeader>
            <form
              onSubmit={(e) => {
                e.stopPropagation();
                onSubmit(e);
              }}
            >
              <ModalBody>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Input
                      autoFocus
                      size="md"
                      label="Nome *"
                      placeholder="Informe o nome"
                      variant="bordered"
                      defaultValue={editData?.name}
                      {...register("name")}
                    />
                    {!!errors.name?.message && (
                      <p className="text-red-700 text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      size="md"
                      label="E-mail Comercial"
                      placeholder="Informe o email"
                      variant="bordered"
                      defaultValue={editData?.email}
                      type="email"
                      {...register("email")}
                    />
                    {!!errors.email?.message && (
                      <p className="text-red-700 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Controller
                      control={control}
                      name="phone"
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <MaskedInput
                          ref={ref}
                          inputRef={ref}
                          placeholder="(99) 99999-9999"
                          label="Contato Comercial"
                          mask="(00) 00000-0000"
                          onChange={onChange}
                          value={value}
                          defaultValue={editData?.phone}
                          onBlur={onBlur}
                        />
                      )}
                    />
                    {!!errors.phone?.message && (
                      <p className="text-red-700 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Controller
                      control={control}
                      name="cep"
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <MaskedInput
                          ref={ref}
                          inputRef={ref}
                          placeholder="00000-000"
                          label="CEP"
                          mask="00000-000"
                          onChange={onChange}
                          value={value}
                          defaultValue={editData?.cep}
                          onBlur={onBlur}
                        />
                      )}
                    />
                    {!!errors.cep?.message && (
                      <p className="text-red-700 text-sm">
                        {errors.cep.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      size="md"
                      label="Estado"
                      placeholder="Informe o estado"
                      variant="bordered"
                      defaultValue={editData?.state}
                      {...register("state")}
                    />
                    {!!errors.state?.message && (
                      <p className="text-red-700 text-sm">
                        {errors.state.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      size="md"
                      label="Cidade"
                      placeholder="Informe a cidade"
                      variant="bordered"
                      defaultValue={editData?.city}
                      {...register("city")}
                    />
                    {!!errors.city?.message && (
                      <p className="text-red-700 text-sm">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      size="md"
                      label="Endereço"
                      placeholder="Informe o endereço"
                      variant="bordered"
                      defaultValue={editData?.address}
                      {...register("address")}
                    />
                    {!!errors.address?.message && (
                      <p className="text-red-700 text-sm">
                        {errors.address.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      size="md"
                      label="Complemento"
                      placeholder="Informe o complemento"
                      variant="bordered"
                      defaultValue={editData?.complement}
                      {...register("complement")}
                    />
                    {!!errors.address?.message && (
                      <p className="text-red-700 text-sm">
                        {errors.address.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      size="md"
                      label="Longitude"
                      placeholder="Informe o longitude"
                      variant="bordered"
                      defaultValue={editData?.longitude}
                      {...register("longitude")}
                    />
                    {!!errors.address?.message && (
                      <p className="text-red-700 text-sm">
                        {errors.address.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      size="md"
                      label="Latitude"
                      placeholder="Informe o latitude"
                      variant="bordered"
                      defaultValue={editData?.latitude}
                      {...register("latitude")}
                    />
                    {!!errors.latitude?.message && (
                      <p className="text-red-700 text-sm">
                        {errors.latitude.message}
                      </p>
                    )}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="button"
                  color="danger"
                  variant="faded"
                  onPress={() => handleOnClose(onClose)}
                  disabled={isLoading}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  disabled={isLoading}
                  isLoading={isLoading}
                  className="bg-emerald-700 text-white"
                >
                  {editData?.id ? "Editar" : "Salvar"}
                </Button>
              </ModalFooter>
            </form>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};
