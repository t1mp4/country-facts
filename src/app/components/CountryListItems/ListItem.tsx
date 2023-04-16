import { memo } from 'react';
import { cn } from '@/lib';
import Link from 'next/link';
import type { Country } from '@/types/country';

const ListItem = memo(
  ({ country }: { country: Country }) => {
    return (
      <li className="rounded bg-bg-secondary">
        <Link href={`/countries/${country.name.common}`}>
          <article className="flex flex-col">
            <div className="mt-6 px-6 pb-11">
              <h2 className="text-lg font-extrabold">{country.name.common}</h2>

              <dl className="mt-3 grid gap-1 text-sm font-light">
                <div>
                  <div role="term" className="inline font-semibold">
                    Population:
                  </div>
                  <div role="definition" className="ml-1 inline break-words">
                    {country.population}
                  </div>
                </div>

                <div>
                  <div role="term" className="inline font-semibold">
                    Region:
                  </div>
                  <div role="definition" className="ml-1 inline break-words">
                    {country.region}
                  </div>
                </div>

                <div>
                  <div role="term" className="inline font-semibold">
                    {country.capital.length > 1 ? 'Capitals:' : 'Capital:'}
                  </div>
                  {country.capital.map((capital, i) => (
                    <div
                      role="definition"
                      key={capital}
                      className={`ml-1 inline break-words${cn.applyIf(
                        i !== country.capital.length - 1,
                        'border-r-2 pr-1'
                      )}`}
                    >
                      {capital}
                    </div>
                  ))}
                </div>
              </dl>
            </div>
            <div className="-order-1 aspect-[1.5] w-full rounded-t bg-[blue]"></div>
            {/* <img
            className="-order-1 w-full rounded-t"
            src={country.flags.svg}
            alt={country.flags.alt || `Flag of ${country.name.common}`}
            loading="lazy"
          ></img> */}
          </article>
        </Link>
      </li>
    );
  },
  () => true
);

export default ListItem;
