import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <p className="font-display text-[120px] sm:text-[180px] font-bold leading-none tracking-tighter bg-gradient-to-br from-brand-600 to-accent-500 bg-clip-text text-transparent">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
        Sahifa topilmadi
      </h1>
      <p className="mt-3 text-muted max-w-md mx-auto">
        Qidirgan sahifangiz olib tashlangan yoki manzilda xato bor. Bosh
        sahifaga qayting yoki katalog orqali topishga urinib ko'ring.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
        <Button asChild>
          <Link href="/">
            <Home className="size-4" /> Bosh sahifa
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/ustozlar">
            <Search className="size-4" /> Ustozlar katalogi
          </Link>
        </Button>
      </div>
    </div>
  );
}
