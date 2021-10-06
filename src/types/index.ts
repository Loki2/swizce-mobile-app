//component types
export type RootStack = {
  Main: undefined;
  Auth: undefined;
};

export type BottomTabs = {
  screams: undefined;
  Stack: undefined;
  Spread:undefined;
  Notification: undefined;
  Setting: undefined;
};

//Data Types
export type Role = 'CLIENT'| 'ITEMEDITOR' | 'ADMIN' | 'SUPERADMIN'

export interface User {
  id: string,
  username: string,
  email: string,
  roles: [],
  create: string
}


export interface IScream {
  id: string,
  imageUrl: string,
  videoUrl: string,
  desc: string,
  likes: number,
  shared: number
}