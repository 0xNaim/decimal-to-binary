import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

const NoteCard = ({ data, handleDelete }) => {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          avatar={<Avatar area-label="recipe">P</Avatar>}
          action={
            <IconButton onClick={() => handleDelete(data.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={data.title}
          subheader={data.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {data.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
