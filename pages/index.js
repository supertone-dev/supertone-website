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
        <div className="w-1/2 text-center">
          <p className="text-5xl font-extrabold text-gray-900 my-4">
            Easily organize and access all your samples.
          </p>

          <p className="text-lg md:text-xl text-gray-700 my-4">
            Supertone is a tool for digital musicians. Quickly tag, search, and
            access all your samples through a single interface.
          </p>
        </div>
        <button
          onClick={() => router.push("/early-access")}
          type="button"
          className="inline-flex items-center my-2 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Get early access
        </button>

        <div className="flex flex-col md:flex-row mt-2">
          <img src="/samples.png" width="400px" className="rounded-md" />
          <img src="/tags.png" width="400px" className="rounded-md" />
        </div>
      </main>
    </div>
  );
}
