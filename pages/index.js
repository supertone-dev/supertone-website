import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <header className="w-full h-16 mb-8 flex items-center px-10">
        <svg
          className="h-6 w-6"
          viewBox="0 0 22 22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <rect fill="#111827" width="22" height="22" rx="3" />
            <path
              d="M11.214 17.334c1.113 0 2.07-.173 2.87-.519.8-.345 1.412-.836 1.836-1.472.425-.635.638-1.384.638-2.245v-.01c0-1.025-.318-1.826-.954-2.403-.636-.577-1.63-.995-2.984-1.252l-1.31-.264c-.685-.129-1.182-.3-1.49-.514-.307-.214-.46-.5-.46-.857v-.009c0-.252.074-.473.223-.664.15-.19.362-.34.638-.448.275-.108.603-.162.984-.162.393 0 .738.055 1.037.167.299.111.538.265.716.461.18.196.292.426.339.69l.017.105h2.989l-.01-.105a3.961 3.961 0 00-.693-1.995c-.405-.58-.976-1.034-1.714-1.362-.739-.329-1.638-.493-2.698-.493-.973 0-1.837.169-2.593.506-.756.337-1.35.81-1.784 1.42-.434.609-.654 1.326-.66 2.153v.008c0 .99.308 1.8.923 2.426.615.627 1.588 1.072 2.918 1.336l1.31.255c.744.14 1.271.309 1.582.505.31.197.466.473.466.83v.01c0 .263-.087.5-.26.707-.173.208-.414.37-.725.488-.31.117-.677.176-1.098.176-.428 0-.806-.057-1.134-.172a1.945 1.945 0 01-.782-.474 1.225 1.225 0 01-.343-.699l-.009-.08H5.923l.009.16c.047.784.288 1.461.725 2.03.436.568 1.041 1.004 1.815 1.309.773.305 1.687.457 2.742.457z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </g>
        </svg>
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
            Supertone is tool for digital musicians. Quickly tag, search, and
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
