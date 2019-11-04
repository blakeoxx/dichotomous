export class TaxonomyMember {
  name?: string;
  quality?: string;

  private static readonly defaults = {
    name: '',
    quality: ''
  };

  constructor(data: { [P in keyof TaxonomyMember]: TaxonomyMember[P] }) {
    const combined = {...TaxonomyMember.defaults, ...data};

    Object.keys(this).forEach(k => this[k] = combined[k]);
  }

  static fromResponse(data: any): TaxonomyMember {
    return new TaxonomyMember(data);
  }
}
