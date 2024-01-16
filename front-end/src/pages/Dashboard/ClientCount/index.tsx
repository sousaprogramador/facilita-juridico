import { Card, CardBody } from "@nextui-org/react";
import { LayoutList } from "lucide-react";

type ClientCountProps = {
  total: number;
};

export const ClientCount = ({ total }: ClientCountProps) => {
  return (
    <Card shadow="sm" className="w-full" isPressable>
      <CardBody className="overflow-visible px-3 py-4 border-b">
        <div className="flex items-center justify-between">
          <LayoutList className="h-5 w-5 sm:h-7 sm:w-7 text-emerald-700" />
          <div>
            <h2 className="text-sm font-bold sm:text-sm">Total de clientes</h2>
            <p className="text-right text-sm font-medium sm:text-base">
              {total}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
