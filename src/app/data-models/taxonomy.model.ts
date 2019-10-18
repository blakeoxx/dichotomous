import { TaxonomyMemberModel } from './taxonomy-member.model';

export class TaxonomyModel {
  id: number;
  name: string;
  description: string;
  creator: string;
  creationTime: Date;
  updateTime: Date;
  qualities: string[];
  members: TaxonomyMemberModel[];

  private readonly defaults = {
    id: '',
    name: '',
    description: '',
    creator: '',
    creationTime: new Date(0),
    updateTime: new Date(0),
    qualities: [],
    members: []
  };

  constructor(data?: any) {
    const combined = {...this.defaults, ...data};

    this.id = combined.id;
    this.name = combined.name;
    this.description = combined.description;
    this.creator = combined.creator;
    this.creationTime = new Date(combined.creationTime);
    this.updateTime = new Date(combined.updateTime);
    this.qualities = combined.qualities;
    this.members = combined.members.map(v => new TaxonomyMemberModel(v));
  }
}
