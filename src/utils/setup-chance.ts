import Chance from 'chance';
import { ImageModel } from '../components/useImages';
import { PhotoCategory } from '../scripts/generateJson';

export const chance = new Chance() as Chance.Chance & CustomChance;

export interface CustomChance {
    longWord(options?: any): string;

    photoModel(options?: any): ImageModel;

    photoCategory(): string;
}

chance.mixin({
    longWord: (options?: any) => {
        return chance.word({
            length: chance.d20() + 10,
            ...options,
        });
    },

    photoModel: (options?: any) => ({
        uri: chance.longWord(),
        title: chance.longWord(),
        category: chance.word(),
        page: chance.photoCategory().toString(),
        ...options,
    }),

    photoCategory: () => {
        return chance.natural({ min: 0, max: 2 }) as PhotoCategory;
    },
});
