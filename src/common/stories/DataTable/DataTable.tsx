import { Table } from "../../data/DataTable";

const DataTable = (props: { data: Table[] }) => {
    const { data } = props;

    return (
        <table className="w-full border-separate border-spacing-2">
            <tr className="border-spacing-72 p-8">
                <th className="border-2 border-red-300 p-4">ID</th>
                <th className="border-2 border-red-300 p-4">Type</th>
                <th className="border-2 border-red-300 p-4">Author</th>
                <th className="border-2 border-red-300 p-4">Date</th>
                <th className="border-2 border-red-300 p-4">Event</th>
                <th className="border-2 border-red-300 p-4">Recipt ID</th>
            </tr>
            {data.map((row) => (
                <tr>
                    {row.map((data) => (
                        <td className="border-2 border-red-300 p-4">
                            {data != null ? data : "-"}
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    );
};

export default DataTable;
