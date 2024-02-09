import React, { createContext, ReactNode, useContext, useState } from 'react';

interface IWordsProviderProps {
    children: ReactNode;
}

export interface IFavoriteValues {
    word:string,
    active:boolean,
}

export interface IWordsProps {
    favoriteWords:IFavoriteValues[];
    setFavoriteWords:React.Dispatch<React.SetStateAction<IFavoriteValues[]>>;
}

const WordsContext = createContext({} as IWordsProps);

const WordsProvider:React.FC<IWordsProviderProps> = ({ children } ) => {
    const [favoriteWords, setFavoriteWords] = useState<IFavoriteValues[]>([])

    return (
        <WordsContext.Provider
            value={{ favoriteWords , setFavoriteWords }}
        >
            {children}
        </WordsContext.Provider>
    )
}

const useWords = (): IWordsProps  => useContext(WordsContext);

export { WordsProvider , useWords };