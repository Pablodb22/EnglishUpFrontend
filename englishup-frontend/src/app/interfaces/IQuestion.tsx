 interface IQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  level?: string; 
}