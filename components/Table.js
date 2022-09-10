export default function Table() {
  return (
    <div className="overflow-x-auto relative">
      <div className="border border-gray-700">
        <p className="py-5 px-2 text-xl text-center">Regular Flex Investment</p>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-gray-700 uppercase bg-gray-50 border-t-0 border-b-0 border-l border-r border-gray-700  dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-gray-800 text-lg border-t-0 border-b-0 border-gray-700 bg-gray-200">
            <th scope="col" className="py-3 pl-3">
              Stake Created
            </th>
            <th scope="col" className="py-3 pl-3">
              Lock Up
            </th>

            <th scope="col" className="py-3 pl-3">
              Amount Staked
            </th>
            <th scope="col" className="py-3 pl-3">
              Interest/APY
            </th>
          </tr>
        </thead>

        <tbody className="border border-t-0 border-gray-700">
          <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 pl-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              1
            </th>
            <td className="py-4 pl-6">30 days</td>
            <td className="py-4 pl-6">400 Flexvis</td>
            <td className="py-4 pl-6">80 Flexvis</td>
          </tr>
          <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 pl-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              1
            </th>
            <td className="py-4 pl-6">30 days</td>
            <td className="py-4 pl-6">400 Flexvis</td>
            <td className="py-4 pl-6">80 Flexvis</td>
          </tr>
          <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 pl-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              1
            </th>
            <td className="py-4 pl-6">30 days</td>
            <td className="py-4 pl-6">400 Flexvis</td>
            <td className="py-4 pl-6">80 Flexvis</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/*

STAKE CREATED	STAKE PROGRESS	LOCK UP	AMOUNT STAKED	INTEREST/APY	
*/
