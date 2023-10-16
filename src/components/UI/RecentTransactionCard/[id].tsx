import { GetServerSideProps } from "next";
import { Container, Typography } from "@mui/material";
import ItemDetail from "./../ParticularTransaction/page";

const items = [
  { id: 1, receiver: "Alice", sender: "Bob", amount: "$100" },
  { id: 2, receiver: "Charlie", sender: "David", amount: "$50" },
  { id: 3, receiver: "Eve", sender: "Frank", amount: "$75" },
];

interface Item {
  id: number;
  receiver: string;
  sender: string;
  amount: string;
}

interface ItemDetailPageProps {
  item: Item;
}

const ItemDetailPage: React.FC<ItemDetailPageProps> = ({ item }) => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Item Detail
      </Typography>
      <ItemDetail {...item} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const item = items.find((item) => item.id === parseInt(id as string, 10));

  if (!item) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      item,
    },
  };
};

export default ItemDetailPage;
