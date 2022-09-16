interface Result {
    fileName: string;
    checker: string;
    similarity: number;
    duplicates: number[];
    when: string;
    textContext: string;
}