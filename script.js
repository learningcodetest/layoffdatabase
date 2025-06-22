document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const rawData = [
        {"Company":"Alphabet","Year":2023,"Month":1,"NumberOfLayoffs":12000,"OverviewSnippet":"Largest-ever layoff, 6% of workforce, post-pandemic over-hiring.","stockInfo":{"previousDayClose":93.05,"layoffDayClose":97.92}},
        {"Company":"Alphabet","Year":2023,"Month":7,"NumberOfLayoffs":48,"OverviewSnippet":"Waze team merged into Google Maps.","stockInfo":{"previousDayClose":119.48,"layoffDayClose":119.71}},
        {"Company":"Alphabet","Year":2023,"Month":9,"NumberOfLayoffs":200,"OverviewSnippet":"Cuts to global recruiting as hiring slowed.","stockInfo":{"previousDayClose":137.58,"layoffDayClose":137.65}},
        {"Company":"Alphabet","Year":2024,"Month":1,"NumberOfLayoffs":1000,"OverviewSnippet":"Cuts to focus on AI priorities.","stockInfo":{"previousDayClose":142.21,"layoffDayClose":142.65}},
        {"Company":"Alphabet","Year":2024,"Month":4,"NumberOfLayoffs":200,"OverviewSnippet":"Streamlining technical infrastructure.","stockInfo":{"previousDayClose":156.64,"layoffDayClose":156.82}},
        {"Company":"Alphabet","Year":2025,"Month":1,"NumberOfLayoffs":300,"OverviewSnippet":"Streamlining core engineering and Assistant.","stockInfo":{"previousDayClose":141.22,"layoffDayClose":141.84}},
        {"Company":"Alphabet","Year":2025,"Month":2,"NumberOfLayoffs":400,"OverviewSnippet":"Ongoing cost optimization, AI investment.","stockInfo":{"previousDayClose":141.8,"layoffDayClose":142.12}},
        {"Company":"Alphabet","Year":2025,"Month":3,"NumberOfLayoffs":400,"OverviewSnippet":"Cuts in Android, Pixel, Chrome.","stockInfo":{"previousDayClose":144.1,"layoffDayClose":144.41}},
        {"Company":"Alphabet","Year":2025,"Month":4,"NumberOfLayoffs":300,"OverviewSnippet":"Restructuring for AI focus.","stockInfo":{"previousDayClose":171.13,"layoffDayClose":171.95}},
        {"Company":"Alphabet","Year":2025,"Month":5,"NumberOfLayoffs":200,"OverviewSnippet":"Streamlining sales, partnerships.","stockInfo":{"previousDayClose":172.87,"layoffDayClose":173.44}},
        {"Company":"Alphabet","Year":2025,"Month":6,"NumberOfLayoffs":800,"OverviewSnippet":"Voluntary exit for AI expansion.","stockInfo":{"previousDayClose":178.13,"layoffDayClose":178.67}},
        {"Company":"Amazon","Year":2018,"Month":2,"NumberOfLayoffs":300,"OverviewSnippet":"HQ and retail consolidation.","stockInfo":{"previousDayClose":1429.95,"layoffDayClose":1430.63}},
        {"Company":"Amazon","Year":2022,"Month":11,"NumberOfLayoffs":10000,"OverviewSnippet":"First major layoffs, underperforming divisions.","stockInfo":{"previousDayClose":98.94,"layoffDayClose":96.72}},
        {"Company":"Amazon","Year":2023,"Month":1,"NumberOfLayoffs":18000,"OverviewSnippet":"Largest layoff in company history.","stockInfo":{"previousDayClose":86.08,"layoffDayClose":95.6}},
        {"Company":"Amazon","Year":2023,"Month":3,"NumberOfLayoffs":9000,"OverviewSnippet":"Second phase of cost-cutting.","stockInfo":{"previousDayClose":96.55,"layoffDayClose":96.72}},
        {"Company":"Amazon","Year":2024,"Month":1,"NumberOfLayoffs":500,"OverviewSnippet":"Refocus on high-impact content.","stockInfo":{"previousDayClose":153.38,"layoffDayClose":153.5}},
        {"Company":"Amazon","Year":2024,"Month":2,"NumberOfLayoffs":200,"OverviewSnippet":"Restructuring healthcare.","stockInfo":{"previousDayClose":169.32,"layoffDayClose":169.51}},
        {"Company":"Amazon","Year":2024,"Month":4,"NumberOfLayoffs":500,"OverviewSnippet":"Entertainment consolidation.","stockInfo":{"previousDayClose":179.92,"layoffDayClose":180.38}},
        {"Company":"Amazon","Year":2024,"Month":4,"NumberOfLayoffs":200,"OverviewSnippet":"Streamlining AWS.","stockInfo":{"previousDayClose":179.92,"layoffDayClose":180.38}},
        {"Company":"Amazon","Year":2024,"Month":11,"NumberOfLayoffs":180,"OverviewSnippet":"Cuts after underperforming releases.","stockInfo":{"previousDayClose":173.9,"layoffDayClose":174.56}},
        {"Company":"Amazon","Year":2025,"Month":3,"NumberOfLayoffs":14000,"OverviewSnippet":"Reduce bureaucracy, increase efficiency.","stockInfo":{"previousDayClose":178.12,"layoffDayClose":178.75}},
        {"Company":"Apple","Year":2019,"Month":2,"NumberOfLayoffs":190,"OverviewSnippet":"Self-driving car project layoffs.","stockInfo":{"previousDayClose":41.37,"layoffDayClose":41.49}},
        {"Company":"Apple","Year":2023,"Month":4,"NumberOfLayoffs":24,"OverviewSnippet":"Small number of corporate retail layoffs.","stockInfo":{"previousDayClose":165.63,"layoffDayClose":164.66}},
        {"Company":"Apple","Year":2024,"Month":1,"NumberOfLayoffs":121,"OverviewSnippet":"Closure of AI-focused unit.","stockInfo":{"previousDayClose":185.59,"layoffDayClose":185.74}},
        {"Company":"Apple","Year":2024,"Month":4,"NumberOfLayoffs":614,"OverviewSnippet":"Cuts after ending car and microLED projects.","stockInfo":{"previousDayClose":171.13,"layoffDayClose":171.48}},
        {"Company":"Apple","Year":2024,"Month":8,"NumberOfLayoffs":100,"OverviewSnippet":"Cuts in Apple Books and News.","stockInfo":{"previousDayClose":174.23,"layoffDayClose":174.99}},
        {"Company":"Meta","Year":2022,"Month":11,"NumberOfLayoffs":11000,"OverviewSnippet":"First major layoff, 13% headcount cut.","stockInfo":{"previousDayClose":96.47,"layoffDayClose":96.47}},
        {"Company":"Meta","Year":2023,"Month":3,"NumberOfLayoffs":10000,"OverviewSnippet":"Second major round, 'Year of Efficiency.'","stockInfo":{"previousDayClose":180.9,"layoffDayClose":194.02}},
        {"Company":"Meta","Year":2023,"Month":9,"NumberOfLayoffs":4000,"OverviewSnippet":"Cuts in product and VR/AR.","stockInfo":{"previousDayClose":302.55,"layoffDayClose":303.56}},
        {"Company":"Meta","Year":2023,"Month":10,"NumberOfLayoffs":24,"OverviewSnippet":"Small cuts in custom chip team.","stockInfo":{"previousDayClose":314.66,"layoffDayClose":319.0}},
        {"Company":"Meta","Year":2025,"Month":2,"NumberOfLayoffs":3600,"OverviewSnippet":"Targeting low performers, AI focus.","stockInfo":{"previousDayClose":473.12,"layoffDayClose":475.0}},
        {"Company":"Microsoft","Year":2015,"Month":7,"NumberOfLayoffs":7800,"OverviewSnippet":"Restructuring after Nokia acquisition.","stockInfo":{"previousDayClose":44.24,"layoffDayClose":44.76}},
        {"Company":"Microsoft","Year":2016,"Month":5,"NumberOfLayoffs":1850,"OverviewSnippet":"Final phase of Lumia/mobile exit.","stockInfo":{"previousDayClose":50.9,"layoffDayClose":51.06}},
        {"Company":"Microsoft","Year":2017,"Month":7,"NumberOfLayoffs":3000,"OverviewSnippet":"Sales force reorganization.","stockInfo":{"previousDayClose":68.17,"layoffDayClose":68.71}},
        {"Company":"Microsoft","Year":2022,"Month":7,"NumberOfLayoffs":1800,"OverviewSnippet":"Annual strategic realignment.","stockInfo":{"previousDayClose":253.67,"layoffDayClose":254.29}},
        {"Company":"Microsoft","Year":2022,"Month":10,"NumberOfLayoffs":1000,"OverviewSnippet":"Cost-cutting amid slowing growth.","stockInfo":{"previousDayClose":234.24,"layoffDayClose":240.32}},
        {"Company":"Microsoft","Year":2023,"Month":1,"NumberOfLayoffs":10000,"OverviewSnippet":"5% workforce reduction.","stockInfo":{"previousDayClose":240.35,"layoffDayClose":240.22}},
        {"Company":"Microsoft","Year":2024,"Month":1,"NumberOfLayoffs":1900,"OverviewSnippet":"Post-acquisition restructuring.","stockInfo":{"previousDayClose":399.19,"layoffDayClose":403.81}},
        {"Company":"Microsoft","Year":2024,"Month":5,"NumberOfLayoffs":1000,"OverviewSnippet":"Cuts in cloud and hardware.","stockInfo":{"previousDayClose":426.87,"layoffDayClose":427.09}},
        {"Company":"Microsoft","Year":2024,"Month":6,"NumberOfLayoffs":1000,"OverviewSnippet":"Fiscal year-end restructuring.","stockInfo":{"previousDayClose":442.67,"layoffDayClose":443.28}},
        {"Company":"Microsoft","Year":2024,"Month":9,"NumberOfLayoffs":650,"OverviewSnippet":"Additional gaming division cuts.","stockInfo":{"previousDayClose":444.51,"layoffDayClose":445.1}},
        {"Company":"Microsoft","Year":2025,"Month":1,"NumberOfLayoffs":2000,"OverviewSnippet":"Performance-based cuts.","stockInfo":{"previousDayClose":378.3,"layoffDayClose":378.91}},
        {"Company":"Microsoft","Year":2025,"Month":5,"NumberOfLayoffs":6000,"OverviewSnippet":"3% workforce reduction.","stockInfo":{"previousDayClose":419.22,"layoffDayClose":420.21}},
        {"Company":"Microsoft","Year":2025,"Month":6,"NumberOfLayoffs":500,"OverviewSnippet":"Additional cuts after May layoffs.","stockInfo":{"previousDayClose":424.9,"layoffDayClose":425.34}},
        {"Company":"Microsoft","Year":2025,"Month":7,"NumberOfLayoffs":3000,"OverviewSnippet":"Cuts in sales and MCAPS.","stockInfo":{"previousDayClose":449.53,"layoffDayClose":450.12}},
        {"Company":"Microsoft","Year":2025,"Month":8,"NumberOfLayoffs":305,"OverviewSnippet":"WARN Act cuts, restructuring.","stockInfo":{"previousDayClose":452.0,"layoffDayClose":452.6}},
        {"Company":"NVIDIA","Year":2015,"Month":null,"NumberOfLayoffs":0,"OverviewSnippet":"No layoffs, performance management focus.","stockInfo":{"previousDayClose":9.18,"layoffDayClose":9.22}}
    ];

    // --- DOM Elements & State ---
    const elements = {
        chartCanvas: document.getElementById('layoffsChart').getContext('2d'),
        companyFilterContainer: document.getElementById('company-filter-container'),
        tooltip: document.getElementById('custom-tooltip'),
        statsContainer: document.getElementById('stats-container'),
        dateFromBtn: document.getElementById('date-from-btn'),
        dateToBtn: document.getElementById('date-to-btn'),
        calendarPopup: document.getElementById('calendar-popup'),
        monthYearDisplay: document.getElementById('month-year-display'),
        prevMonthBtn: document.getElementById('prev-month-btn'),
        nextMonthBtn: document.getElementById('next-month-btn'),
        calendarGrid: document.querySelector('.calendar-grid'),
        themeToggle: document.getElementById('theme-toggle'),
        tooltipStockSection: document.getElementById('tooltip-stock-section'),
        stockPriceOnDay: document.getElementById('stock-price-on-day'),
        stockChangePercent: document.getElementById('stock-change-percent'),
        stockChangeValue: document.getElementById('stock-change-value'),
        stockChangePeriod: document.getElementById('stock-change-period'),
        stockIconUp: document.querySelector('.stock-icon-up'),
        stockIconDown: document.querySelector('.stock-icon-down'),
    };
    const state = { startDate: new Date('2015-01-01'), endDate: new Date('2025-12-31'), activeCompanies: new Set(), showTrend: false, calendar: { currentDate: new Date(), targetButton: null } };
    const COMPANY_COLORS = { 'Alphabet': '#EA4335', 'Amazon': '#FF9900', 'Apple': '#8E8E93', 'Meta': '#1877F2', 'Microsoft': '#FFB900', 'NVIDIA': '#76B900' };
    const ALL_COMPANIES = [...new Set(rawData.map(item => item.Company))].sort();
    let layoffsChart;

    // --- Utils ---
    const formatDate = (date) => date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const getCssVar = (varName) => getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    
    // --- Chart Logic ---
    function updateChart() {
        const filteredData = rawData.filter(d => {
            if (!d.Month || !d.Year) return false; const itemDate = new Date(d.Year, d.Month - 1, 1);
            return state.activeCompanies.has(d.Company) && itemDate >= state.startDate && itemDate <= state.endDate;
        });
        const datasets = ALL_COMPANIES.map(company => {
            if (!state.activeCompanies.has(company)) return null;
            const companyData = filteredData.filter(d => d.Company === company).map(d => ({ x: new Date(d.Year, d.Month - 1).getTime(), y: d.NumberOfLayoffs, original: d }));
            if (companyData.length === 0) return null;
            return { label: company, data: companyData, borderColor: COMPANY_COLORS[company], backgroundColor: COMPANY_COLORS[company], tension: 0.1, pointRadius: 4, pointHoverRadius: 6 };
        }).filter(Boolean);
        layoffsChart.data.datasets = datasets;
        layoffsChart.options.scales.x.min = state.startDate.getTime();
        layoffsChart.options.scales.x.max = state.endDate.getTime();
        layoffsChart.update('none');
        updateStats(filteredData);
    }

    // --- UI Init ---
    function initChart() {
        layoffsChart = new Chart(elements.chartCanvas, { type: 'line', data: { datasets: [] }, options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false }, plugins: { legend: { display: false }, tooltip: { enabled: false, external: tooltipHandler } }, scales: { x: { type: 'time', time: { unit: 'year' }, grid: { color: getCssVar('--border-color') }, ticks: { color: getCssVar('--text-secondary'), font: { family: getCssVar('--font-mono') } } }, y: { beginAtZero: true, grid: { color: getCssVar('--border-color') }, ticks: { color: getCssVar('--text-secondary'), font: { family: getCssVar('--font-mono') }, callback: value => value >= 1000 ? `${value / 1000}k` : value } } } } });
    }
    
    function initFilters() {
        const toggleAllBtn = document.createElement('button');
        toggleAllBtn.className = 'filter-btn active'; toggleAllBtn.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> <span id="toggle-all-text">Hide All</span>`;
        elements.companyFilterContainer.appendChild(toggleAllBtn);
        toggleAllBtn.addEventListener('click', () => {
            const isHiding = document.getElementById('toggle-all-text').textContent === 'Hide All';
            const companyBtns = document.querySelectorAll('.company-btn');
            if (isHiding) { state.activeCompanies.clear(); companyBtns.forEach(btn => btn.classList.remove('active')); document.getElementById('toggle-all-text').textContent = 'Show All'; }
            else { ALL_COMPANIES.forEach(c => state.activeCompanies.add(c)); companyBtns.forEach(btn => btn.classList.add('active')); document.getElementById('toggle-all-text').textContent = 'Hide All'; }
            updateChart();
        });
        ALL_COMPANIES.forEach(company => {
            state.activeCompanies.add(company); const btn = document.createElement('button');
            btn.className = 'filter-btn company-btn active'; btn.dataset.company = company; btn.textContent = company;
            btn.addEventListener('click', () => {
                btn.classList.toggle('active'); if (state.activeCompanies.has(company)) state.activeCompanies.delete(company); else state.activeCompanies.add(company);
                document.getElementById('toggle-all-text').textContent = state.activeCompanies.size === ALL_COMPANIES.length ? 'Hide All' : 'Show All';
                updateChart();
            });
            elements.companyFilterContainer.appendChild(btn);
        });
        elements.dateFromBtn.textContent = formatDate(state.startDate); elements.dateToBtn.textContent = formatDate(state.endDate);
        [elements.dateFromBtn, elements.dateToBtn].forEach(btn => btn.addEventListener('click', () => showCalendar(btn)));
    }

    // --- CORRECTED TOOLTIP HANDLER ---
    function tooltipHandler(context) {
        const { chart, tooltip } = context;
        const tooltipEl = elements.tooltip;

        if (tooltip.opacity === 0) {
            tooltipEl.style.opacity = 0;
            // Add the hidden class back to ensure it's fully gone
            tooltipEl.classList.add('hidden');
            return;
        }

        const point = tooltip.dataPoints[0];
        if (!point?.raw?.original) {
            return;
        }
        
        const originalData = point.raw.original;

        // Set content
        tooltipEl.querySelector('#tooltip-company').textContent = originalData.Company;
        tooltipEl.querySelector('#tooltip-date').textContent = `${originalData.Month}/${originalData.Year}`;
        tooltipEl.querySelector('#tooltip-layoffs').textContent = originalData.NumberOfLayoffs.toLocaleString();
        tooltipEl.querySelector('#tooltip-overview').textContent = originalData.OverviewSnippet;
        
        const { stockInfo } = originalData;
        if (stockInfo && stockInfo.previousDayClose && stockInfo.layoffDayClose) {
            elements.stockPriceOnDay.textContent = `$${stockInfo.layoffDayClose.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
            const change = ((stockInfo.layoffDayClose - stockInfo.previousDayClose) / stockInfo.previousDayClose) * 100;
            const isUp = change >= 0;
            elements.stockChangeValue.textContent = `${isUp ? '+' : ''}${change.toFixed(2)}%`;
            elements.stockChangePeriod.textContent = '(1 day)';
            elements.stockChangePercent.className = `stock-change-value ${isUp ? 'stock-up' : 'stock-down'}`;
            elements.stockIconUp.classList.toggle('hidden', !isUp);
            elements.stockIconDown.classList.toggle('hidden', isUp);
            elements.tooltipStockSection.classList.remove('hidden');
        } else {
            elements.tooltipStockSection.classList.add('hidden');
        }

        // Make the tooltip visible *before* measuring and positioning
        tooltipEl.classList.remove('hidden');

        const { offsetLeft: chartLeft, offsetTop: chartTop } = chart.canvas;
        const tooltipWidth = tooltipEl.offsetWidth;
        const tooltipHeight = tooltipEl.offsetHeight;
        const viewportPadding = 10;
        
        let left = chartLeft + point.element.x - (tooltipWidth / 2);
        let top = chartTop + point.element.y - tooltipHeight - 15;
        
        if (top < viewportPadding) {
            top = chartTop + point.element.y + 15;
        }
        if (left < viewportPadding) {
            left = viewportPadding;
        }
        if (left + tooltipWidth > window.innerWidth - viewportPadding) {
            left = window.innerWidth - tooltipWidth - viewportPadding;
        }
        if (top + tooltipHeight > window.innerHeight - viewportPadding) {
            top = window.innerHeight - tooltipHeight - viewportPadding;
        }
        
        tooltipEl.style.left = `${left}px`;
        tooltipEl.style.top = `${top}px`;
        tooltipEl.style.opacity = 1;
    }

    // --- Stats, Calendar, & Theme ---
    function updateStats(filteredData) {
        elements.statsContainer.innerHTML = '';
        ALL_COMPANIES.forEach(company => {
            const companyData = filteredData.filter(d => d.Company === company);
            const total = companyData.reduce((sum, d) => sum + d.NumberOfLayoffs, 0); const count = companyData.length;
            const cardWrapper = document.createElement('div'); cardWrapper.dataset.company = company;
            const card = document.createElement('div'); card.className = 'stat-card'; card.innerHTML = `<div class="company-name">${company}</div><div class="total-layoffs">${total.toLocaleString()}</div><div class="layoff-count">from ${count} event${count !== 1 ? 's' : ''}</div>`;
            cardWrapper.appendChild(card); elements.statsContainer.appendChild(cardWrapper);
        });
    }
    function showCalendar(button) {
        state.calendar.targetButton = button;
        const sourceDate = (button.id === 'date-from-btn') ? state.startDate : state.endDate;
        state.calendar.currentDate = new Date(sourceDate); renderCalendar();
        const btnRect = button.getBoundingClientRect();
        elements.calendarPopup.style.top = `${btnRect.bottom + window.scrollY + 5}px`;
        elements.calendarPopup.style.left = `${btnRect.left + window.scrollX}px`;
        elements.calendarPopup.classList.remove('hidden');
    }
    function renderCalendar() {
        const date = state.calendar.currentDate;
        const year = date.getFullYear(); const month = date.getMonth();
        elements.monthYearDisplay.textContent = `${date.toLocaleString('en-us', { month: 'long' })} ${year}`;
        elements.calendarGrid.innerHTML = '';
        ['S', 'M', 'T', 'W', 'T', 'F', 'S'].forEach(day => { elements.calendarGrid.innerHTML += `<div class="calendar-day-header">${day}</div>`; });
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        for (let i = 0; i < firstDayOfMonth; i++) { elements.calendarGrid.innerHTML += `<div class="calendar-day empty"></div>`; }
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const dayEl = document.createElement('div'); dayEl.className = 'calendar-day';
            dayEl.textContent = day; dayEl.addEventListener('click', () => selectDate(day));
            elements.calendarGrid.appendChild(dayEl);
        }
    }
    function selectDate(day) {
        const newDate = new Date(state.calendar.currentDate.getFullYear(), state.calendar.currentDate.getMonth(), day);
        if (state.calendar.targetButton.id === 'date-from-btn') state.startDate = newDate; else state.endDate = newDate;
        state.calendar.targetButton.textContent = formatDate(newDate);
        elements.calendarPopup.classList.add('hidden'); updateChart();
    }
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.dataset.theme = savedTheme;
        elements.themeToggle.addEventListener('click', () => {
            const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
            document.documentElement.dataset.theme = newTheme; localStorage.setItem('theme', newTheme);
            const gridColor = getCssVar('--border-color'); const textColor = getCssVar('--text-secondary');
            if(layoffsChart) {
                layoffsChart.options.scales.x.grid.color = gridColor; layoffsChart.options.scales.y.grid.color = gridColor;
                layoffsChart.options.scales.x.ticks.color = textColor; layoffsChart.options.scales.y.ticks.color = textColor;
                layoffsChart.update();
            }
        });
    }
    
    // --- App Init ---
    function init() {
        initTheme(); initChart(); initFilters(); updateChart();
        elements.prevMonthBtn.addEventListener('click', () => { state.calendar.currentDate.setMonth(state.calendar.currentDate.getMonth() - 1); renderCalendar(); });
        elements.nextMonthBtn.addEventListener('click', () => { state.calendar.currentDate.setMonth(state.calendar.currentDate.getMonth() + 1); renderCalendar(); });
        document.addEventListener('click', (e) => {
            if (!elements.calendarPopup.classList.contains('hidden') && !elements.calendarPopup.contains(e.target) && e.target !== elements.dateFromBtn && e.target !== elements.dateToBtn) {
                elements.calendarPopup.classList.add('hidden');
            }
        });
    }

    init();
});
