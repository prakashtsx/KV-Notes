import React from "react";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

export type SubjectCardProps = {
  name: string;
  code: string;
  url?: string;
  children?: React.ReactNode;
  onViewClick?: () => void;
};

export function SubjectCard({
  name,
  code,
  url,
  children,
  onViewClick,
}: SubjectCardProps) {
  const handleClick = () => {
    if (onViewClick) {
      onViewClick();
    }
  };

  return (
    <Card className="w-full max-w-sm h-fit">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{code}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        {children ?? (
          <p className="text-sm text-muted-foreground">
            Add notes for this subject here.
          </p>
        )}
      </CardContent>

      <CardFooter className="flex-col">
        <Button
          variant="outline"
          className="w-full cursor-pointer"
          onClick={onViewClick ? handleClick : undefined}
          asChild={!onViewClick}
          disabled={!url && !onViewClick}
        >
          {onViewClick ? (
            <span className="cursor-pointer">View</span>
          ) : (
            <a href={url ?? "#"} target="_blank" rel="noreferrer">
              View
            </a>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
