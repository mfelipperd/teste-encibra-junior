'use client'
import React, { useEffect, useState } from 'react';
import Dashboard from '@/components/list-tasks';

export default function ConcluedTasks() {
return(
  <>
  <Dashboard title={'Lista de Tarefas'} tipo={false} />
  </>
)
}