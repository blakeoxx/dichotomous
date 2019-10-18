export class TaxonomyMemberModel {
  name: string;
  quality: string;

  private readonly defaults = {
    name: '',
    quality: ''
  };

  constructor(data?: any) {
    const combined = {...this.defaults, ...data};

    this.name = combined.name;
    this.quality = combined.quality;
  }
}
