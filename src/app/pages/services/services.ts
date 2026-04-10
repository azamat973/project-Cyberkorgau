import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.css']
})
export class ServicesComponent {
  // Сайт тексеру
  siteUrl = '';
  scanResult: any = null;
  isScanning = false;
  
  // Фишинг симуляторы
  phishingResult = '';
  phishingStep = 0;
  phishingQuestions = [
    {
      question: 'Сізге банктен SMS келіп, сілтеме бойынша өтуді сұрайды. Не істейсіз?',
      options: [
        'Сілтеме бойынша өтіп, деректерімді енгіземін',
        'Банкке қоңырау шалып, тексеріп аламын',
        'SMS-ті елемеймін және жоямын'
      ],
      correct: 2
    },
    {
      question: 'Email-де бейтаныс адам сізден пароль сұрайды. Не істейсіз?',
      options: [
        'Парольді жіберемін',
        'Ешкімге парольді айтпаймын, хабарламаны жоямын',
        'Қосымша ақпарат сұраймын'
      ],
      correct: 1
    },
    {
      question: 'Жұмыс компютеріне күдікті файл келіп түсті. Не істейсіз?',
      options: [
        'Файлды ашып көремін',
        'Антивирус тексерісінен өткіземін',
        'IT маманға хабарласамын'
      ],
      correct: 2
    }
  ];
  
  // Қауіп калькуляторы
  revenue = 0;
  employees = 0;
  riskResult: number | null = null;
  riskLevel = '';
  
  // Жаңа қызметтер
  selectedFile: File | null = null;
  vulnScanResult: any = null;
  
  passwordToCheck = '';
  passwordStrength = '';
  passwordStrengthScore = 0;
  
  emailToCheck = '';
  emailBreachResult: any = null;
  
  generatedPassword = '';
  
  securityTips: string[] = [];
  
  // Қызметтер тізімі
  services = [
    {
      id: 1,
      icon: '🔍',
      title: 'Vulnerability Scanner',
      description: 'Сайтыңызды 50+ әлсіздікке тексереді',
      longDescription: 'Автоматты түрде сайтыңызды сканерлеп, XSS, SQL Injection, CSRF және басқа да қауіптерді анықтайды.',
      features: ['XSS тексеру', 'SQL Injection', 'CSRF қорғанысы', 'SSL сертификаты'],
      color: '#00ffcc'
    },
    {
      id: 2,
      icon: '🎣',
      title: 'Phishing Simulator',
      description: 'Фишинг шабуылдарын тануға үйретеді',
      longDescription: 'Нақты фишинг шабуылдарының мысалдары арқылы қалай қорғану керектігін үйреніңіз.',
      features: ['Интерактивті тест', 'Нақты мысалдар', 'Нәтиже талдауы', 'Ұсыныстар'],
      color: '#ffaa44'
    },
    {
      id: 3,
      icon: '💰',
      title: 'Risk Calculator',
      description: 'Кибершабуылдан келетін шығынды есептейді',
      longDescription: 'Бизнесіңіздің деректері бойынша ықтимал шығынды және қауіп деңгейін анықтайды.',
      features: ['Шығын есебі', 'Қауіп деңгейі', 'Ұсыныстар', 'Салыстыру'],
      color: '#44ff88'
    },
    {
      id: 4,
      icon: '🔐',
      title: 'Password Strength Checker',
      description: 'Құпия сөзіңіздің беріктігін тексереді',
      longDescription: 'Құпия сөзіңіздің қаншалықты берік екенін және оны қалай жақсартуға болатынын көрсетеді.',
      features: ['Беріктік тексеру', 'Уақыт есебі', 'Ұсыныстар', 'Қауіпсіз пароль генераторы'],
      color: '#ff44aa'
    },
    {
      id: 5,
      icon: '📧',
      title: 'Email Breach Checker',
      description: 'Email-іңіздің деректер ағымын тексереді',
      longDescription: 'Email мекенжайыңыздың әлемдік деректер ағымында бар-жоғын тексереді.',
      features: ['Have I Been Pwned интеграциясы', 'Құпия сөз ұсыныстары', 'Қауіпсіздік кеңестері'],
      color: '#8888ff'
    },
    {
      id: 6,
      icon: '🛡️',
      title: 'Security Training',
      description: 'Киберқауіпсіздік бойынша оқыту курстары',
      longDescription: 'Қызметкерлеріңізді киберқауіпсіздік негіздеріне үйретіңіз.',
      features: ['Сертификаттау', 'Тестілеу', 'Есеп беру', 'Қашықтан оқыту'],
      color: '#ff8888'
    },
    {
      id: 7,
      icon: '🌐',
      title: 'Network Security Scan',
      description: 'Желілік қауіпсіздікті тексеру',
      longDescription: 'Желіңіздегі ашық порттарды, осалдықтарды және қауіптерді анықтайды.',
      features: ['Порт сканерлеу', 'Желілік аудит', 'Ұсыныстар', 'Есеп беру'],
      color: '#88ff88'
    },
    {
      id: 8,
      icon: '📱',
      title: 'Mobile App Security',
      description: 'Мобильді қосымшаларды тексеру',
      longDescription: 'Android/iOS қосымшаларыңызды қауіпсіздікке тексереді.',
      features: ['Код аудиті', 'Деректер шифрлау', 'API қауіпсіздігі', 'Ұсыныстар'],
      color: '#ffaa88'
    }
  ];
  
  selectedService: any = null;
  
  // Пароль беріктігін тексеру
  checkPasswordStrength() {
    let score = 0;
    let tips = [];
    
    if (this.passwordToCheck.length >= 8) {
      score += 1;
    } else {
      tips.push('Құпия сөз кемінде 8 таңбадан тұруы керек');
    }
    
    if (/[A-Z]/.test(this.passwordToCheck)) {
      score += 1;
    } else {
      tips.push('Кемінде бір бас әріп қосыңыз');
    }
    
    if (/[a-z]/.test(this.passwordToCheck)) {
      score += 1;
    } else {
      tips.push('Кемінде бір кіші әріп қосыңыз');
    }
    
    if (/[0-9]/.test(this.passwordToCheck)) {
      score += 1;
    } else {
      tips.push('Кемінде бір сан қосыңыз');
    }
    
    if (/[^A-Za-z0-9]/.test(this.passwordToCheck)) {
      score += 1;
    } else {
      tips.push('Кемінде бір арнайы символ қосыңыз (!@#$%^&*)');
    }
    
    this.passwordStrengthScore = score;
    
    if (score <= 2) {
      this.passwordStrength = 'Әлсіз 🔴';
    } else if (score <= 4) {
      this.passwordStrength = 'Орташа 🟡';
    } else {
      this.passwordStrength = 'Күшті 🟢';
    }
    
    this.securityTips = tips;
  }
  
  // Қауіпсіз пароль генерациялау
  generatePassword() {
    const length = 12;
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    const allChars = uppercase + lowercase + numbers + symbols;
    let password = '';
    
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    for (let i = password.length; i < length; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    this.generatedPassword = password.split('').sort(() => Math.random() - 0.5).join('');
    this.passwordToCheck = this.generatedPassword;
    this.checkPasswordStrength();
  }
  
  // Сайт тексеру
  async checkSite() {
    if (!this.siteUrl) {
      alert('Сайт URL мекенжайын енгізіңіз!');
      return;
    }
    
    this.isScanning = true;
    this.scanResult = null;
    
    // Симуляция сканирования
    setTimeout(() => {
      const issues = [];
      const isSecure = Math.random() > 0.3;
      
      if (!isSecure) {
        if (Math.random() > 0.5) issues.push('XSS уязвимость анықталды');
        if (Math.random() > 0.5) issues.push('SSL сертификаты ескірген');
        if (Math.random() > 0.5) issues.push('Ашық порттар анықталды');
        if (Math.random() > 0.5) issues.push('Күшті емес парольдер');
      }
      
      this.scanResult = {
        safe: isSecure,
        score: isSecure ? Math.floor(Math.random() * 20 + 80) : Math.floor(Math.random() * 50 + 30),
        issues: issues,
        message: isSecure 
          ? '✅ Сайт қауіпсіз! Ешқандай әлсіздік табылмады.' 
          : `⚠️ Ескерту! ${issues.length} әлсіздік анықталды.`,
        recommendations: isSecure 
          ? ['Антивирусты жаңартып тұрыңыз', '2FA қосыңыз']
          : ['SSL сертификатын жаңартыңыз', 'Кодты аудиттен өткізіңіз', 'Firewall баптаңыз']
      };
      
      this.isScanning = false;
    }, 2000);
  }
  
  // Фишинг тесті
  startPhishingTest() {
    this.phishingStep = 0;
    this.phishingResult = '';
    this.showNextPhishingQuestion();
  }
  
  showNextPhishingQuestion() {
    if (this.phishingStep < this.phishingQuestions.length) {
      const q = this.phishingQuestions[this.phishingStep];
      const optionsHtml = q.options.map((opt, idx) => 
        `<button class="phishing-option" data-idx="${idx}">${opt}</button>`
      ).join('');
      
      this.phishingResult = `
        <div class="phishing-question">
          <h4>Сұрақ ${this.phishingStep + 1}/${this.phishingQuestions.length}</h4>
          <p>${q.question}</p>
          <div class="phishing-options">
            ${optionsHtml}
          </div>
        </div>
      `;
      
      // Добавляем обработчики после рендеринга
      setTimeout(() => {
        document.querySelectorAll('.phishing-option').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const idx = parseInt((e.target as HTMLElement).getAttribute('data-idx') || '0');
            this.answerPhishingQuestion(idx);
          });
        });
      }, 100);
    } else {
      this.phishingResult = `
        <div class="phishing-complete">
          <h4>🎉 Тест аяқталды!</h4>
          <p>Сіздің нәтижеңіз: ${this.phishingStep}/${this.phishingQuestions.length} дұрыс жауап</p>
          <p>${this.phishingStep === this.phishingQuestions.length ? 'Керемет! Сіз фишингті тануды жақсы білесіз!' : 'Қосымша оқыту қажет. Курстарымызға жазылыңыз!'}</p>
          <button class="btn-primary" onclick="location.reload()">Қайта бастау</button>
        </div>
      `;
    }
  }
  
  answerPhishingQuestion(selectedIdx: number) {
    const currentQ = this.phishingQuestions[this.phishingStep];
    if (selectedIdx === currentQ.correct) {
      this.phishingStep++;
      this.showNextPhishingQuestion();
    } else {
      this.phishingResult = `
        <div class="phishing-wrong">
          <p>❌ Қате жауап! Дұрыс жауап: ${currentQ.options[currentQ.correct]}</p>
          <button class="btn-primary" onclick="location.reload()">Қайта бастау</button>
        </div>
      `;
    }
  }
  
  // Қауіп калькуляторы
  calculateRisk() {
    if (this.revenue <= 0 || this.employees <= 0) {
      alert('Барлық өрістерді толтырыңыз!');
      return;
    }
    
    const baseLoss = this.revenue * 0.35;
    const employeeLoss = this.employees * 1.5;
    const dataLoss = this.revenue * 0.15;
    const totalLoss = baseLoss + employeeLoss + dataLoss;
    
    this.riskResult = Math.round(totalLoss);
    
    if (totalLoss < 10) {
      this.riskLevel = 'Төмен 🟢';
    } else if (totalLoss < 50) {
      this.riskLevel = 'Орташа 🟡';
    } else {
      this.riskLevel = 'Жоғары 🔴';
    }
  }
  
  // Email ағымын тексеру
  checkEmailBreach() {
    if (!this.emailToCheck) {
      alert('Email мекенжайыңызды енгізіңіз!');
      return;
    }
    
    // Симуляция
    const isBreached = Math.random() > 0.7;
    const breachCount = Math.floor(Math.random() * 5);
    
    this.emailBreachResult = {
      breached: isBreached,
      count: breachCount,
      message: isBreached 
        ? `⚠️ Ескерту! Сіздің email ${breachCount} деректер ағымында табылды. Құпия сөзіңізді өзгертіңіз!`
        : '✅ Қауіпсіз! Сіздің email деректер ағымында табылмады.'
    };
  }
  
  // Файл сканерлеу
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.scanFile();
    }
  }
  
  scanFile() {
    this.vulnScanResult = {
      scanning: true
    };
    
    setTimeout(() => {
      const isSafe = Math.random() > 0.2;
      this.vulnScanResult = {
        safe: isSafe,
        message: isSafe 
          ? '✅ Файл қауіпсіз! Вирус табылмады.'
          : '⚠️ Ескерту! Файлдан қауіпті код табылды!'
      };
    }, 2000);
  }
  
  showServiceDetails(service: any) {
    this.selectedService = service;
  }
  
  closeServiceDetails() {
    this.selectedService = null;
  }
}