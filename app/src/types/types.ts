export interface IGame {
    developer: string;
    freetogame_profile_url: string;
    game_url: string;
    genre: string;
    id: number;
    platform: string;
    publisher: string;
    release_date: string;
    short_description: string;
    thumbnail: string;
    title: string;
}

export interface IGameExtended extends IGame {
    description: string;
    minimum_system_requirements: {
        graphics: string;
        memory: string;
        os: string;
        processor: string;
        storage: string;
    }
    screenshots: Array<{
        id: number;
        image: string;
    }>;
    status: string;
}

export interface IParamsGamesList {
    platform?: string;
    category?: string;
    'sort-by'?: string;
}
