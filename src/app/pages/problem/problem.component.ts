import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.css']
})
export class ProblemComponent implements OnInit {
  // Статистикалық деректер
  stat1: number = 10.5;
  stat2: number = 60;
  stat3: number = 24567;
  stat4: number = 67;
  
  // CVE уязвимостьтер тізімі (2025-2026)
  cveList = [
    { id: 'CVE-2026-32635', title: 'Angular i18n XSS', severity: 'Жоғары', score: 8.6, date: '2026-03-16' },
    { id: 'CVE-2026-27970', title: 'Angular i18n XSS (Translation)', severity: 'Жоғары', score: 8.2, date: '2026-02-26' },
    { id: 'CVE-2026-27739', title: 'Angular SSR SSRF', severity: 'Жоғары', score: 8.6, date: '2026-02-25' },
    { id: 'CVE-2026-27738', title: 'Angular SSR Open Redirect', severity: 'Орташа', score: 6.1, date: '2026-02-25' },
    { id: 'CVE-2026-22610', title: 'Angular SVG XSS', severity: 'Жоғары', score: 7.5, date: '2026-01-10' },
    { id: 'CVE-2025-66412', title: 'Angular Template Compiler XSS', severity: 'Жоғары', score: 7.2, date: '2025-12-01' },
    { id: 'CVE-2025-66035', title: 'Angular XSRF Token Leakage', severity: 'Орташа', score: 6.5, date: '2025-11-26' }
  ];
  
  // Қазақстан бойынша статистика
  kzStats = {
    smePercentage: 90,
    cyberAttacks2025: 15470,
    avgLossPerAttack: 2.8,
    companiesWithoutSecurity: 67
  };
  
  // Қауіп түрлері
  threatTypes = [
    { name: 'Фишинг шабуылдары', percentage: 36, icon: '🎣' },
    { name: 'Ransomware (шифрлаушы вирустар)', percentage: 24, icon: '💰' },
    { name: 'Жеке деректердің ұрлануы', percentage: 19, icon: '🆔' },
    { name: 'DDoS шабуылдары', percentage: 12, icon: '🌊' },
    { name: 'Басқа да қауіптер', percentage: 9, icon: '⚠️' }
  ];
  
  ngOnInit() {
    // Сандарды біртіндеп көрсету
    setTimeout(() => this.stat1 = 10.5, 200);      // Триллион доллар
    setTimeout(() => this.stat2 = 60, 500);        // Процент бизнес жабылады
    setTimeout(() => this.stat3 = 137957, 800);    // Angular сайттар саны
    setTimeout(() => this.stat4 = 24567, 1100); 
  }
  
  getSeverityClass(severity: string): string {
    switch(severity) {
      case 'Жоғары': return 'severity-high';
      case 'Орташа': return 'severity-medium';
      default: return 'severity-low';
    }
  }
}