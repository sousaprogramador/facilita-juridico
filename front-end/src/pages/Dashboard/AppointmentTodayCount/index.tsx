import { Card, CardBody } from "@nextui-org/react";
import { ClipboardCheck } from "lucide-react";

type FirstDeliveryProps = {
  name: string;
};

export const FirstDelivery = ({ name }: FirstDeliveryProps) => {
  return (
    <Card shadow="sm" className="w-full" isPressable>
      <CardBody className="overflow-visible px-3 py-4 border-b">
        <div className="flex items-center justify-between">
          <ClipboardCheck className="h-5 w-5 sm:h-7 sm:w-7 text-emerald-700" />
          <div>
            <h2 className="text-sm font-bold sm:text-sm">Primeira entrega</h2>
            <p className="text-right text-sm font-medium sm:text-base">
              {name}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
