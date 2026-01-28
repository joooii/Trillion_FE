export interface ChatListItem{
    counselId: number;
    title: string;
    date: string;
    category?: string;
    status?: string;
}

export interface ChatPaginatedResponse{
    content: ChatListItem[];
    hasNext: boolean;
    nextCursorId: number | null;
}

export interface ChatListParams{
    cursorId?: number;
    limit: number;
}