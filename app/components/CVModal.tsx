"use client";

import { Modal, Box, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CVModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
  <AnimatePresence mode="wait">
    {open && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(6px)",
            }}
        >
        <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }} // 👈 smooth exit
            transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1], // smooth easing
            }}
            >
        <Box
            sx={{
              width: "90vw",
              maxWidth: "900px",
              height: "85vh",
              bgcolor: "#121212",
              borderRadius: 3,
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-white text-lg font-semibold">
                My Resume
              </h2>

              <div className="flex items-center gap-2">
                <IconButton onClick={onClose}>
                  <CloseIcon sx={{ color: "white" }} />
                </IconButton>
              </div>
            </div>

            {/* PDF */}
            <iframe
              src="/Daryll_Kendrick_Zuniga_CV.pdf"
              className="w-full h-full rounded-lg"
            />
          </Box>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</Modal>
  );
}