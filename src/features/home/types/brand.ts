type TBrand = TItem<BrandAttributes>;

interface BrandAttributes {
  name: string;
  main_page: {
    name: string;
    image: string;
    url: string;
  };
  detail_page: {
    text: {
      title: string;
      preview_text: string;
      detail_text: string;
    };
    images: {
      preview: string;
      detail: string | null;
    };
    url: string;
  };
}
