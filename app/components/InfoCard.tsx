"use client";

import { Card, CardContent, Typography } from "@mui/material";

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: React.ReactNode;
};

export default function InfoCard({
  title,
  subtitle,
  description,
  icon,
}: Props) {
  return (
    <Card
        elevation={0}
        sx={{
            background: "linear-gradient(135deg, #1a1a1a, #202020)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.05)",
            transition: "all 0.3s ease",
            "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 10px 30px rgba(168,85,247,0.25)", 
            borderColor: "rgba(168,85,247,0.4)",
            },
        }}
        >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 2,
        }}
      >
        {/* LEFT CONTENT */}
        <div>
         <Typography
            variant="h6"
            sx={{
                color: "#c084fc", 
                fontWeight: 600,
                mb: 1,
            }}
            >
            {title}
            </Typography>
          {subtitle && (
            <Typography
              variant="body2"
              sx={{ color: "#9ca3af", mb: 1 }}
            >
              {subtitle}
            </Typography>
          )}

          {description && (
            <Typography
              variant="body2"
              sx={{ color: "#d1d5db" }}
            >
              {description}
            </Typography>
          )}
        </div>

        {/* RIGHT ICON */}
        {icon && (
          <div className="text-purple-400 opacity-80">
            {icon}
          </div>
        )}
      </CardContent>
    </Card>
  );
}