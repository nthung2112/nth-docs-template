import Link from 'next/link';
import tools from './toolsConfig';

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      className="mr-1 h-3 w-3"
    >
      <title>Star Icon</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col justify-center flex-1 container mx-auto max-w-7xl px-6 grow">
      <section className="py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Tool Collections
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            A comprehensive directory of all internal tools and resources.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-5 px-4 pt-2 md:grid-cols-2 md:px-0 lg:grid-cols-3">
        {tools.map((item) => (
          <Link
            target="_blank"
            className="flex h-28 flex-col rounded-md border border-gray-100 bg-gray-50 p-4 shadow-none hover:bg-gray-100"
            key={item.href}
            href={item.href}
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white">
                  <img
                    src={`https://www.google.com/s2/favicons?sz=128&domain_url=https://${item.domain}`}
                    alt={`${item.title} logo`}
                    className="h-5 w-5"
                  />
                </div>
                <h3 className="font-heading font-semibold">{item.title}</h3>
              </div>
              <div className="text-xs text-muted-foreground">
                <div className="flex items-center">
                  <StarIcon />
                  {item.count}
                </div>
              </div>
            </div>
            <p className="mb-2 text-xs text-gray-700">{item.description}</p>
            <div className="mt-auto">
              <div className="text-sm">
                <div className="inline-flex items-center rounded-md border py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-5 px-2 text-[10px] font-light text-gray-600 mb-1 mr-1">
                  {item.tag}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
