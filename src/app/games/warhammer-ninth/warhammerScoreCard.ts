export class WarhammerScoreCard {
    public GameId: string;
    public Players: WarhammerScoreCardPlayer[];
    public GameState: GameState;
    public TableId: string; //nullable, if populated result will be added to a table for a league.
}

export interface WarhammerScoreCardPlayer {
    UID :string;
    Side: number;
    SecondaryObjectives: string[];
}

export interface WarhammerScoreCardGameRound {
    PrimaryObjectiveScore: number;
    SecondaryObjectiveScore: number;
}

export enum GameState {
    Setup = 1, //Add players, sides etc ...
    InProgress = 2, //players and sides locked. points can be awarded.
    Finished = 3, //everything is locked.
    Cancelled = 4 //everything is locked, wont be tallied.
}

//Allow games with more than 2 sides
//Allow players to ally 1v1, 2v2, 3v3 etc ... 