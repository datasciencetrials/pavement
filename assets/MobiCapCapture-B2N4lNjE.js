import{j as e}from"./index-B-EbfzqS.js";import{r as g}from"./vendor-recharts-wkQjnUGp.js";
const NODES=[
  {id:"root",label:"National Roads NPMS",sub:"21,284.02 km",x:440,y:230,color:"#0071E3",r:46,
   desc:"National Pavement Management System (FY 2026/27 baseline) providing view-only condition intelligence, deterioration modelling, and Vision 2040 prioritisation across Uganda's 21,284.02 km National Road Network."},
  {id:"extent",label:"Network Extent",sub:"Classes A, B, C, M",x:175,y:95,color:"#0071E3",r:34,
   desc:"Authoritative FY 2026/27 extent: 21,284.02 km total. International Trunk (Class A): 2,604.65 km; National Trunk (Class B): 2,845.27 km; Primary (Class C): 15,689.54 km; Expressways (Class M): 144.56 km."},
  {id:"surface",label:"Surface & Condition",sub:"30.10% Paved",x:705,y:95,color:"#16A34A",r:34,
   desc:"Paved (Bituminous): 6,406.69 km (30.10%); Unpaved (Gravel): 14,877.33 km (69.90%). FY 2025/26 National Road condition: Good 12,610.00 km (59.20%), Fair 7,844.00 km (36.82%), Poor 848.00 km (3.98%)."},
  {id:"tools",label:"Survey Systems",sub:"Field Assessment Tools",x:140,y:245,color:"#D97706",r:34,
   desc:"Condition surveys use MOBICAP(Road condition assesment tool) for visual distress (cracking, ravelling, potholes, shoulders, drainage) and ROMDAS(Roughness and rutting machine based testing) for IRI and rut depth."},
  {id:"vision",label:"Vision 2040",sub:"HDM-4 & Budgets",x:740,y:245,color:"#7C3AED",r:34,
   desc:"Long-term deterioration curves, residual life modelling, and multi-year maintenance budget scenarios projected to 2040 in alignment with Vision 2040 targets."},
  {id:"eng",label:"Engineering & GIS",sub:"Esri Hybrid & 2D",x:205,y:385,color:"#0D9488",r:34,
   desc:"Esri World Imagery with Hybrid Labels basemaps, 2D engineering pavement cross-section schematics, Falling Weight Deflectometer (FWD) structural capacity, and design catalogue standards."},
  {id:"gov",label:"Governance & SQL",sub:"6 Regions · 23 Stations",x:675,y:385,color:"#DC2626",r:34,
   desc:"Structured across 6 Maintenance Regions and 23 Maintenance Stations. Strictly view-only, UK English, metric units (km, m, mm, T, km/h), decimal degrees, dd/mm/yyyy dates, and km-based reporting."}
];
const EDGES=[["root","extent"],["root","surface"],["root","tools"],["root","vision"],["root","eng"],["root","gov"]];

function Ue(){
  const[tab,setTab]=g.useState("docs");
  const[sel,setSel]=g.useState("root");
  const[zoom,setZoom]=g.useState(1);
  const activeNode=NODES.find(n=>n.id===sel)||NODES[0];
  const card={background:"#FFFFFF",border:"1px solid #E2E8F0",borderRadius:14,padding:20,boxShadow:"0 1px 3px rgba(15,23,42,0.04)"};
  const pill=(on)=>({padding:"8px 16px",borderRadius:999,border:on?"1px solid #0071E3":"1px solid #E2E8F0",background:on?"#0071E3":"#FFFFFF",color:on?"#FFFFFF":"#0F172A",fontWeight:700,fontSize:12,cursor:"pointer"});
  return e.jsx("div",{style:{height:"100%",overflowY:"auto",background:"#F5F5F7",color:"#0F172A",padding:"20px 24px 48px",fontFamily:"Inter, Arial, sans-serif"},children:e.jsxs("div",{style:{maxWidth:1240,margin:"0 auto",display:"flex",flexDirection:"column",gap:18},children:[
    e.jsxs("div",{style:{...card,display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:16},children:[
      e.jsxs("div",{children:[
        e.jsx("div",{style:{fontSize:11,fontWeight:800,letterSpacing:"0.08em",color:"#0071E3",textTransform:"uppercase"},children:"UGANDA TRANSPORT GIS ENTERPRISE · NATIONAL ROAD NETWORK ASSET ENTERPRISE"}),
        e.jsx("h1",{style:{margin:"4px 0 4px",fontSize:22,fontWeight:800,color:"#0F172A"},children:"Platform Documentation & Interactive Mind Map"}),
        e.jsx("p",{style:{margin:0,fontSize:13,color:"#475569"},children:"View-only reference guide, authoritative FY 2026/27 baseline figures, survey standards, and Vision 2040 system architecture."})
      ]}),
      e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[
        e.jsx("button",{type:"button",onClick:()=>setTab("docs"),style:pill(tab==="docs"),children:"Platform Documentation"}),
        e.jsx("button",{type:"button",onClick:()=>setTab("mindmap"),style:pill(tab==="mindmap"),children:"Interactive Mind Map"})
      ]})
    ]}),

    tab==="docs"&&e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:16},children:[
      e.jsxs("div",{style:card,children:[
        e.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#0071E3",textTransform:"uppercase",marginBottom:6},children:"1. Authoritative Network Baseline"}),
        e.jsx("h3",{style:{margin:"0 0 10px",fontSize:16,fontWeight:700,color:"#0F172A"},children:"National Road Network (21,284.02 km)"}),
        e.jsxs("ul",{style:{margin:0,paddingLeft:18,fontSize:13,lineHeight:1.7,color:"#334155"},children:[
          e.jsx("li",{children:"Total Network Extent: 21,284.02 km (FY 2026/27 baseline)"}),
          e.jsx("li",{children:"Paved (Bituminous): 6,406.69 km (30.10%)"}),
          e.jsx("li",{children:"Unpaved (Gravel): 14,877.33 km (69.90%)"}),
          e.jsx("li",{children:"International Trunk Roads (Class A): 2,604.65 km"}),
          e.jsx("li",{children:"National Trunk Roads (Class B): 2,845.27 km"}),
          e.jsx("li",{children:"Primary Roads (Class C): 15,689.54 km"}),
          e.jsx("li",{children:"Expressways (Class M): 144.56 km"})
        ]})
      ]}),
      e.jsxs("div",{style:card,children:[
        e.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#16A34A",textTransform:"uppercase",marginBottom:6},children:"2. Network Condition (FY 2025/26)"}),
        e.jsx("h3",{style:{margin:"0 0 10px",fontSize:16,fontWeight:700,color:"#0F172A"},children:"Condition Distribution"}),
        e.jsxs("ul",{style:{margin:0,paddingLeft:18,fontSize:13,lineHeight:1.7,color:"#334155"},children:[
          e.jsx("li",{children:"Good Condition: 12,610.00 km (59.20%)"}),
          e.jsx("li",{children:"Fair Condition: 7,844.00 km (36.82%)"}),
          e.jsx("li",{children:"Poor Condition: 848.00 km (3.98%)"}),
          e.jsx("li",{children:"Coverage: 6 Maintenance Regions and 23 Maintenance Stations"}),
          e.jsx("li",{children:"All network metrics are reported strictly in physical kilometres (km) and percentages (%)."})
        ]})
      ]}),
      e.jsxs("div",{style:card,children:[
        e.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#D97706",textTransform:"uppercase",marginBottom:6},children:"3. Survey & Testing Systems"}),
        e.jsx("h3",{style:{margin:"0 0 10px",fontSize:16,fontWeight:700,color:"#0F172A"},children:"Field Assessment Instruments"}),
        e.jsxs("ul",{style:{margin:0,paddingLeft:18,fontSize:13,lineHeight:1.7,color:"#334155"},children:[
          e.jsx("li",{children:"MOBICAP(Road condition assesment tool): visual pavement distress, cracking, ravelling, potholes, drainage, and shoulder condition."}),
          e.jsx("li",{children:"ROMDAS(Roughness and rutting machine based testing): automated International Roughness Index (IRI, m/km) and rut depth (mm) profiling."}),
          e.jsx("li",{children:"Falling Weight Deflectometer (FWD): structural deflection bowls (D1 to D9), BLI, MLI, LLI, and subgrade modulus estimation."})
        ]})
      ]}),
      e.jsxs("div",{style:card,children:[
        e.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#7C3AED",textTransform:"uppercase",marginBottom:6},children:"4. Governance & Vision 2040"}),
        e.jsx("h3",{style:{margin:"0 0 10px",fontSize:16,fontWeight:700,color:"#0F172A"},children:"Platform Standards"}),
        e.jsxs("ul",{style:{margin:0,paddingLeft:18,fontSize:13,lineHeight:1.7,color:"#334155"},children:[
          e.jsx("li",{children:"Public view-only analytical intelligence portal with zero data-entry forms or administrative gates."}),
          e.jsx("li",{children:"All deterioration and budget models project through 2040 in alignment with Vision 2040."}),
          e.jsx("li",{children:"Metric units (km, m, mm, T, km/h), decimal degree coordinates, dd/mm/yyyy date format, and UK English throughout."}),
          e.jsx("li",{children:"All GIS maps render over Esri World Imagery with Hybrid Labels."})
        ]})
      ]})
    ]}),

    tab==="mindmap"&&e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(280px, 1fr)",gap:16,alignItems:"start"},children:[
      e.jsxs("div",{style:card,children:[
        e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[
          e.jsxs("div",{children:[
            e.jsx("div",{style:{fontSize:15,fontWeight:700,color:"#0F172A"},children:"NPMS Architecture Mind Map"}),
            e.jsx("div",{style:{fontSize:12,color:"#64748B"},children:"Click any node to inspect its scope and authoritative figures."})
          ]}),
          e.jsxs("div",{style:{display:"flex",gap:6},children:[
            e.jsx("button",{type:"button",onClick:()=>setZoom(z=>Math.min(1.4,+(z+0.1).toFixed(2))),style:{padding:"5px 10px",borderRadius:8,border:"1px solid #E2E8F0",background:"#FFFFFF",color:"#0F172A",fontWeight:700,cursor:"pointer"},children:"+"}),
            e.jsx("button",{type:"button",onClick:()=>setZoom(z=>Math.max(0.7,+(z-0.1).toFixed(2))),style:{padding:"5px 10px",borderRadius:8,border:"1px solid #E2E8F0",background:"#FFFFFF",color:"#0F172A",fontWeight:700,cursor:"pointer"},children:"-"}),
            e.jsx("button",{type:"button",onClick:()=>{setZoom(1);setSel("root");},style:{padding:"5px 10px",borderRadius:8,border:"1px solid #E2E8F0",background:"#FFFFFF",color:"#0F172A",fontWeight:600,fontSize:12,cursor:"pointer"},children:"Reset"})
          ]})
        ]}),
        e.jsx("div",{style:{overflow:"auto",border:"1px solid #E2E8F0",borderRadius:12,background:"#F5F5F7",padding:8},children:
          e.jsxs("svg",{viewBox:"0 0 880 470",style:{width:"100%",height:"auto",transform:`scale(${zoom})`,transformOrigin:"center center",transition:"transform 0.2s ease"},children:[
            EDGES.map(([a,b])=>{
              const n1=NODES.find(n=>n.id===a),n2=NODES.find(n=>n.id===b);
              return e.jsx("line",{x1:n1.x,y1:n1.y,x2:n2.x,y2:n2.y,stroke:n2.color,strokeWidth:2.5,strokeOpacity:0.35},`${a}-${b}`);
            }),
            NODES.map(n=>{
              const active=n.id===sel;
              return e.jsxs("g",{onClick:()=>setSel(n.id),style:{cursor:"pointer"},children:[
                e.jsx("rect",{x:n.x-74,y:n.y-27,width:148,height:54,rx:14,fill:active?n.color:"#FFFFFF",stroke:n.color,strokeWidth:active?3:2}),
                e.jsx("text",{x:n.x,y:n.y-2,textAnchor:"middle",fontSize:11.5,fontWeight:800,fill:active?"#FFFFFF":"#0F172A",children:n.label}),
                e.jsx("text",{x:n.x,y:n.y+14,textAnchor:"middle",fontSize:9.5,fontWeight:600,fill:active?"#E2E8F0":"#475569",children:n.sub})
              ]},n.id);
            })
          ]})
        })
      ]}),
      e.jsxs("div",{style:{...card,borderTop:`4px solid ${activeNode.color}`},children:[
        e.jsx("div",{style:{fontSize:11,fontWeight:800,color:activeNode.color,textTransform:"uppercase",letterSpacing:"0.06em"},children:"Selected Node"}),
        e.jsx("h3",{style:{margin:"6px 0 4px",fontSize:18,fontWeight:800,color:"#0F172A"},children:activeNode.label}),
        e.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#475569",marginBottom:12},children:activeNode.sub}),
        e.jsx("p",{style:{margin:0,fontSize:13,lineHeight:1.65,color:"#334155"},children:activeNode.desc}),
        e.jsx("div",{style:{marginTop:16,paddingTop:12,borderTop:"1px solid #E2E8F0",display:"flex",flexWrap:"wrap",gap:6},children:
          NODES.map(n=>e.jsx("button",{type:"button",onClick:()=>setSel(n.id),style:{padding:"5px 10px",borderRadius:8,border:`1px solid ${n.id===sel?n.color:"#E2E8F0"}`,background:n.id===sel?n.color:"#FFFFFF",color:n.id===sel?"#FFFFFF":"#0F172A",fontSize:11,fontWeight:700,cursor:"pointer"},children:n.label},n.id))
        })
      ]})
    ]})
  ]})});
}
export{Ue as default};
