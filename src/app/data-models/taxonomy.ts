import { TaxonomyMember } from './taxonomy-member';

export class Taxonomy {
  id: number;
  name?: string;
  description?: string;
  creator?: string;
  creationTime?: Date;
  updateTime?: Date;
  qualities?: string[];
  members?: TaxonomyMember[];

  private static readonly defaults = {
    name: '',
    description: '',
    creator: '',
    creationTime: new Date(0),
    updateTime: new Date(0),
    qualities: [],
    members: []
  };

  constructor(data: { [P in keyof Taxonomy]: Taxonomy[P] }) {
    const combined = {...Taxonomy.defaults, ...data};

    Object.keys(this).forEach(k => this[k] = combined[k]);
  }

  static fromResponse(data: any): Taxonomy {
    const transient = {...data};

    if (transient.creationTime) transient.creationTime = new Date(transient.creationTime);
    if (transient.updateTime) transient.updateTime = new Date(transient.updateTime);
    if (transient.members) transient.members = transient.members.map(v => new TaxonomyMember(v));

    return new Taxonomy(transient);
  }
}
