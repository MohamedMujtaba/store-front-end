import { CldImage } from "next-cloudinary";
import React from "react";

interface ItemProps {
  id: string;
  title: string;
  compony: string;
  status: string;
  currentPrice: number;
  hot: boolean;
  active: boolean;
  images: {
    public_id: string;
    url: string;
  }[];
}

interface TableProps {
  data: ItemProps[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="container  mx-auto py-12 px-4 md:px-6 lg:px-12">
      <section className="mb-20 text-gray-800">
        <div className="block rounded-lg bg-white shadow-lg">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="mb-0 min-w-full">
                    <thead className="rounded-t-lg border-b bg-gray-50 text-left">
                      <tr>
                        <th
                          scope="col"
                          className="rounded-tl-lg px-6 py-4 text-sm font-medium"
                        >
                          TITLE
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium"
                        >
                          PRICE
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium"
                        >
                          ACTIVE?
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium"
                        >
                          STATUS
                        </th>
                        <th
                          scope="col"
                          className="rounded-tr-lg px-6 py-4 text-sm font-medium"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((i) => {
                        return <Row key={i.id} {...i} />;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Table;

const Row: React.FC<ItemProps> = (props) => {
  return (
    <tr className="border-b">
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 text-left text-sm font-normal"
      >
        <div className="flex flex-row items-center">
          <CldImage
            width={48}
            height={48}
            // crop="fill"
            className="h-12 rounded-full object-contain"
            src={props?.images[0].public_id}
            alt="Description of my image"
          />
          <div className="ml-4">
            <p className="mb-0.5 font-medium">{props.title}</p>
            {/* <p className="mb-0.5 text-gray-500">jane.cooper@example.com</p> */}
          </div>
        </div>
      </th>
      <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-normal">
        <div className="flex flex-col">
          <p className="mb-0.5">{props.currentPrice.toLocaleString("en-US")}</p>
          {/* <p className="mb-0.5 text-gray-500">Optimization</p> */}
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-left align-middle text-sm font-normal">
        {props.active ? (
          <span className="whitespace-nowrap rounded-full bg-green-200 py-1 px-2.5 text-center align-baseline text-xs font-medium leading-none text-green-600">
            Active
          </span>
        ) : (
          <span className="whitespace-nowrap rounded-full bg-yellow-200 py-1 px-2.5 text-center align-baseline text-xs font-medium leading-none text-yellow-600">
            Not active
          </span>
        )}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-left align-middle text-sm font-normal text-gray-500">
        {props.status}
      </td>
      <td className="whitespace-nowrap px-6 py-4  text-right align-middle text-sm font-normal">
        <a
          href="#!"
          className="font-medium text-blue-600 transition duration-300 ease-in-out hover:text-blue-700 focus:text-blue-700 active:text-blue-800"
        >
          Edit
        </a>
      </td>
    </tr>
  );
};
