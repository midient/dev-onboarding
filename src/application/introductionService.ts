export interface IntroductionService {
    hasOpenedBefore: boolean;
    setHasOpenedBefore: (hasOpenedBefore: boolean) => void;
    addWelcomeTodo: (todo: { text: string }) => Promise<void>;
}