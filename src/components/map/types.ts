export type TrailDifficulty = 'green' | 'blue' | 'black' | 'double-black';
export type LiftStatus = 'open' | 'closed' | 'hold' | 'scheduled';
export type ZoneType = 'beginner' | 'terrain-park' | 'slow' | 'avalanche-prone' | 'learning';

export interface TrailProps {
  id: string;
  name: string;
  difficulty: TrailDifficulty;
  isClosed?: boolean;
  coordinates: [number, number][];
}

export interface LiftProps {
  id: string;
  name: string;
  type: 'chairlift' | 'gondola';
  status: LiftStatus;
  coordinates: [number, number][];
  loadingZones: {
    bottom: [number, number];
    top: [number, number];
  };
}

export interface ZoneProps {
  id: string;
  type: ZoneType;
  name?: string;
  coordinates: [number, number][];
}
