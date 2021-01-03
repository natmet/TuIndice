export interface College {
    id: number;
    name: string;
    logo: string;
    scoringSystem: string;
    careers: Array<Career>;
}

export interface Career {
    id: number;
    name: string;
    subjects: Array<Subject>;
}

export interface Subject {
    id: number;
    name: string;
    credits: number;
    score: number;
}
