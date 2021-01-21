export interface College {
    id: number;
    name: string;
    logo: string;
    scoringSystem: string;
    scores: Array<Score>
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

export interface Score {
    literal: string;
    value: number;
}
