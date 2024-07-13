import { Link2, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Vinicius Bueno
            </span>
            <span className="block text-sm text-zinc-400 truncate ">
              BuenoVini455@hotmail.com
            </span>
          </div>
          <Link2 className="text-zinc-400 size-5" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Dr Sabrina Carvalho
            </span>
            <span className="block text-zinc-400 truncate ">
              SabrinaDeCarvalho@outlook.com
            </span>
          </div>
          <Link2 className="text-zinc-400 size-5" />
        </div>
      </div>
      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
