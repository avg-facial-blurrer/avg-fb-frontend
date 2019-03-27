import { Child } from '../domain/Child';

export class Group {
    private readonly _id: number;
    private readonly _name: string;
    private children: Child[] = [];
    
    constructor(id: number, name: string, children?: Child[]) {
        this._id = id;
        this._name = name;

        if (children != null) this.children = children;
        else this.children = null;
    }

    public getId(): number {
        return this._id;
    }

    public getName(): string {
        return this._name;
    }

    public getChildren(): Child[] {
        return this.children;
    }

    public addChild(child: Child): void {
        this.children.push(child);
    }

    public getChildById(childId: number): Child {
        this.children.forEach(x => { if (x.id == childId) return x; })
        return null;
    }

    public removeChildById(childId: number): void {
        this.children.forEach((x, i) => { if (x.id == childId) this.children.splice(i, 1); }); 
    }
}