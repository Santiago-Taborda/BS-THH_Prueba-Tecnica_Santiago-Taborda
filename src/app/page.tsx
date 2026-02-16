import ProductList from "@/components/productList";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen font-sans bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center justify-center w-full max-w-3xl min-h-screen px-16 py-32 bg-white dark:bg-black sm:items-start">
        <h1 className="text-2xl font-bold">Black Stallion / The Horses House</h1>
        <h2 className="text-xl font-bold">Prueba Técnica - Santiago Taborda</h2>
        <ProductList />
      </main>
    </div>
  );
}
