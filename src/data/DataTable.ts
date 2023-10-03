enum RecordType {
    Sales,
    Expenditure,
    Donation,
    Tax,
}

export type Table = [
    number,
    RecordType,
    string,
    string,
    string | null,
    number | null,
];

export const data: Table[] = [
    [
        4,
        RecordType.Sales,
        "John Doe",
        new Date(2023, 8, 2).toLocaleDateString(),
        "Movie Night",
        2,
    ],
    [
        3,
        RecordType.Expenditure,
        "John Doe",
        new Date(2023, 7, 31).toLocaleDateString(),
        "Lemonade Stand",
        1,
    ],
    [
        2,
        RecordType.Donation,
        "John Doe",
        new Date(2023, 7, 25).toLocaleDateString(),
        null,
        0,
    ],
    [
        1,
        RecordType.Sales,
        "John Doe",
        new Date(2023, 7, 25).toLocaleDateString(),
        null,
        0,
    ],
    [
        0,
        RecordType.Tax,
        "John Doe",
        new Date(2023, 7, 10).toLocaleDateString(),
        null,
        null,
    ],
];
