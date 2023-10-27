import React, { useState, useEffect, createContext, ReactNode } from 'react';

// Interfaces
import ISnippet from '../data/interfaces';
import { parse } from 'path';

interface IState {
    settingsActive: boolean;
    feedbackModal: {
        modalActive: boolean;
        modalType: string;
        modalMessage: string;
        modalOpacity: string;
    },
    saveModal: {
        modalActive: boolean
    },
    snippets: ISnippet[] | undefined[] | null[]
}

interface IGlobalProps {
    openSettings(): void;
    displayFeedbackModal(type: string, message: string): void;
    closeFeedbackModal(): void;
    displaySaveModal(): void;
    closeSaveModal(): void;
    getSnippetsFromLocalStorage(): ISnippet[]
    State: IState;
}

export const Context = createContext<IGlobalProps | undefined>(undefined);

// Creates a bunch of global methods and values accessible to every part of the application
export function ContextProvider(props: { children: ReactNode }) {
    const [State, setState] = useState<IState>({
        settingsActive: false,
        feedbackModal: {
            modalActive: false,
            modalType: '',
            modalMessage: '',
            modalOpacity:'0%'
        },
        saveModal: {
            modalActive: false
        },
        snippets: getSnippetsFromLocalStorage()
    });

    useEffect(() => {
    }, [State]);

    function getSnippetsFromLocalStorage(): ISnippet[] {
        const storedData: string | null = localStorage.getItem("snippets");
        
        if (storedData) {
            try {
                // Parse the JSON string and return as an array of Snippets
                var parsedData;
                parsedData = JSON.parse(storedData);
                return parsedData;
            } catch (error) {
                return [];
            }
        } else {
            // Return an empty array if no data is found in localStorage
            return [];
        }
    }

    function openSettings() {
        displayFeedbackModal('error', 'Settings have not been added yet');
    }

    function displayFeedbackModal(type: string, message: string) {
        setState(prevState => ({
            ...prevState,
            feedbackModal: {
                modalActive: true,
                modalType: type,
                modalMessage: message,
                modalOpacity:'100%'
            }
        }));
    }

    // Add effects some other time
    function closeFeedbackModal() {
        setState(prevState => ({
            ...prevState,
            feedbackModal: {
                ...prevState.feedbackModal,
                modalActive: false,
                modalType: '',
                modalMessage: '',
            }
        }));
    }

    function displaySaveModal() {
        displayFeedbackModal('error','Save function has not been added yet.')
        /*
        setState(prevState => ({
            ...prevState,
            saveModal: {
                modalActive: true,
            }
        }));
        */
    }
    function closeSaveModal() {
        setState(prevState => ({
            ...prevState,
            saveModal: {
                modalActive: false,
            }
        }));
    }

    return (
        <Context.Provider 
        value={{ 
            getSnippetsFromLocalStorage,
            openSettings, 
            displayFeedbackModal, 
            closeFeedbackModal, 
            displaySaveModal, 
            closeSaveModal, 
            State }}>
            {props.children}
        </Context.Provider>
    );
}