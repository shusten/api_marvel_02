import { HeroThumbnail } from './hero-thumbnail'
import { HeroSubItems } from './hero-sub-items'

export interface Hero {

        id: number;
        name: string;
        description: string;
        thumbnail: HeroThumbnail;
        resourceURI: string;
        comics: HeroSubItems;
        events: HeroSubItems;
        series: HeroSubItems;
        stories: HeroSubItems;
 }
