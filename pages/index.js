import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/early-access");
  }, []);

  return (
    <div className="flex flex-col">
      <header className="w-full h-16 mb-8 flex items-center px-10">
        <img src="/supertone.svg" className="h-6 w-6" />

        <span className="ml-2 text-xl font-bold border-l pl-2">Supertone</span>

        {/* <button className="bg-gray-800 rounded-md h-9 text-white px-4 text-center align-middle">
            Get early access
          </button> */}
      </header>
      <main className=" flex-1 flex flex-col justify-center items-center mt-4">
        <div className="w-2/3 md:w-1/2 text-center">
          <p className="font-semibold text-gray-400">Limited Early Preview</p>
          <p className="text-6xl font-extrabold text-gray-900 my-8 mb-12">
            Easily organize and access all your samples.
          </p>

          <p className="text-lg text-gray-500 my-8">
            Supertone is a tool for digital musicians. Quickly tag, search, and
            access your samples through a single interface.
          </p>
        </div>
        <button
          onClick={() => router.push("/early-access")}
          type="button"
          className="inline-flex items-center mt-2 mb-8 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Request access
        </button>

        <div className="flex flex-col md:flex-row mt-2">
          <img src="/samples.png" width="400px" className="rounded-md" />
          <img src="/tags.png" width="400px" className="rounded-md" />
        </div>
      </main>
    </div>
  );
}
