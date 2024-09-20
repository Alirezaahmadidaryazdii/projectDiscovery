import { Box, Button, Chip, List, ListItem, Modal, Typography } from "@mui/material";
import ItemList from "./componentPart2/itemList";
import { useState } from "react";

export let data = [
  {
    id: 1,
    current: "Medium",
    dataChip1: "CVE-2023-41597",
    title: "EyouCms v1.6.2 - Cross-Site Scripting",
    dataChip2: "UNRELEASED",
    history: "Added 1d ago by @ritikchaddha",
  },
  {
    id: 2,
    current: "High",
    dataChip1: "nginx-api-traversal",
    title: "Nginx Plus Rest API - Traversal",
    dataChip2: "UNRELEASED",
    history: "Added 1d ago by @encodedguy",
  },
  {
    id: 3,
    current: "Medium",
    dataChip1: "CVE-2023-41621",
    title: "Emlog Pro v2.1.14 - Cross-Site Scripting",
    dataChip2: "UNRELEASED",
    history: "Added 1d ago by @aaaa",
  },
  {
    id: 4,
    current: "High",
    dataChip1: "emlog-installer",
    title: "Emlog Pro - Installation",
    dataChip2: "UNRELEASED",
    history: "Added 1d ago by @ddddd",
  },
  {
    id: 5,
    current: "High",
    dataChip1: "CVE-2024-6586",
    title: "Lightdash v0.1024.6 - Server-Side Request Forgery",
    dataChip2: "UNRELEASED",
    history: "Added 1d ago by @ffff",
  },
  {
    id: 6,
    current: "Medium",
    dataChip1: "CVE-2024-41955",
    title: "Open Redirect in Login Redirect - MobSF",
    dataChip2: "UNRELEASED",
    history: "Added 1d ago by @gdfdgdff",
  },
  {
    id: 7,
    current: "Medium",
    dataChip1: "CVE-2023-35155",
    title: "XWiki - Cross-Site Scripting",
    dataChip2: "UNRELEASED",
    history: "Added 1d ago by @wewetwetw",
  },
  {
    id: 8,
    current: "High",
    dataChip1: "CVE-2024-7029",
    title: "AVTECH IP Camera - Command Injection",
    dataChip2: "UNRELEASED",
    history: "Added 1d ago by @xcvxvx",
  },
  {
    id: 9,
    current: "High",
    dataChip1: "CVE-2024-29889",
    title: "GLPI 10.0.10-10.0.14 - SQL Injection",
    dataChip2: "UNRELEASED",
    history: "Added 1d ago by @ddgdgsa",
  },
  {
    id: 10,
    current: "High",
    dataChip1: "projectsend-auth-bypass",
    title: "ProjectSend <= r1605 - Improper Authorization",
    dataChip2: "UNRELEASED",
    history: "Added 1d ago by @jiojiore",
  },
  {
    id: 11,
    current: "Critical",
    dataChip1: "strapi-admin-installer",
    title: "Zabbix Server - Time-Based Blind SQL injection",
    dataChip2: "UNRELEASED",
    history: "Added 1d ago by @ldsd",
  },
  {
    id: 12,
    current: "Medium",
    dataChip1: "CVE-2014-5181",
    title: "Strapi Versions <=4.5.5 - SSTI to Remote Code Execution",
    dataChip2: "UNRELEASED",
    history: "Added 1d ago by @ljljlkkokp",
  },
  {
    id: 13,
    current: "Medium",
    dataChip1: "CVE-2014-5187",
    title: "Strapi Admin - Installer",
    dataChip2: "UNRELEASED",
    history: "Added 1d ago by @ajlkdjsjfkl",
  },
];


interface DataItem {
  id: number;
  current: string;
  dataChip1: string;
  title: string;
  dataChip2: string;
  history: string;
}

function Part2() {
  const [open, setOpen] = useState(false);
  const handleOpen = (items:DataItem) => {
    setStateItem(items)
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const [stateItem, setStateItem] = useState<DataItem | null>(null);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Box
        sx={{
          border: "1px solid #2d3436",
          borderRadius: "10px",
          padding: "0",
          margin: "20px",
          background: "#0D0D0F",
        }}
      >
        {data.map((element, index) => {
          return (
            <div onClick={()=>handleOpen(element)}>
              <ItemList item={element} key={index} />
            </div>
          );
        })}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {stateItem && (
            <>
              <Chip label={stateItem.current} sx={{my: 2}} variant="outlined" color={stateItem.current === 'High' ? 'error' : 'warning'} />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {stateItem.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {stateItem.history}
              </Typography>
            </>
          )}
        <Button variant="contained" color="error" sx={{my: 2}} onClick={handleClose}> Exit</Button>
        </Box>
      </Modal>
    </>
  );
}

export default Part2;
