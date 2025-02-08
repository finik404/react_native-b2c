type TPost = TItem<PostAttributes>;

interface PostAttributes {
  title: string;
  image: string;
  detail_page: string;
  date_active_to?: string;
  section_name: string;
}
