import React from 'react';

export interface MetodologiaItem {
  id: string;
  numero: string;
  titulo: string;
  descricao: string;
}

export interface FlashItem {
  id: string;
  status: 'DISPONIVEL' | 'VENDIDO';
  numero: string;
  titulo: string;
  detalhes: string; // ex: "15cm x 5cm • Antebraço"
  svgPath: React.ReactNode;
}

export interface ProtocoloItem {
  fase: string;
  titulo: string;
  descricao: string;
  lista: string[];
}

export interface LinkSocial {
  nome: string;
  url: string;
}

export interface ProcessoCriativoItem {
  id: number;
  titulo: string;
  subtitulo: string;
  descricao: string;
}

export interface PreparoItem {
  id: number;
  titulo: string;
  descricao: string;
}