"use client";

import { useMemo, useState } from "react";
import { PhoneIcon, PinIcon, SearchIcon } from "@/components/store-icons";
import { stores } from "@/lib/stores";

function cleanMap(url) {
  return String(url || "").split('"')[0].split(" width")[0];
}

function isBuffet(store) {
  const haystack = `${store.name} ${decodeURIComponent(store.map || "")}`.toLowerCase();
  return haystack.includes("buffet");
}

function directionsUrl(store) {
  const lat = store.coordinates?.latitude;
  const lng = store.coordinates?.longitude;
  if (lat && lng) {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${store.name} ${store.address}`)}`;
}

export function StoresLocator() {
  const [mode, setMode] = useState("store");
  const [name, setName] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [selectedId, setSelectedId] = useState(stores[0]?.id || "");

  const provinces = useMemo(
    () => [...new Set(stores.map((store) => store.province))].sort((a, b) => a.localeCompare(b, "vi")),
    [],
  );
  const districts = useMemo(() => {
    return [...new Set(
      stores
        .filter((store) => !province || store.province === province)
        .map((store) => store.district),
    )].sort((a, b) => a.localeCompare(b, "vi"));
  }, [province]);

  const rows = stores.filter((store) => {
    if (mode === "buffet" && !isBuffet(store)) return false;
    if (province && store.province !== province) return false;
    if (district && store.district !== district) return false;
    const q = name.trim().toLowerCase();
    if (q && !`${store.name} ${store.address}`.toLowerCase().includes(q)) return false;
    return true;
  });
  const activeId = rows.some((store) => store.id === selectedId) ? selectedId : rows[0]?.id;
  const active = rows.find((store) => store.id === activeId);
  const mapSrc = cleanMap(active?.map);

  return (
    <>
      <div className="tabs" role="tablist">
        <button type="button" className={mode === "store" ? "active" : undefined} onClick={() => setMode("store")}>Langfarm Store</button>
        <button type="button" className={mode === "buffet" ? "active" : undefined} onClick={() => setMode("buffet")}>Langfarm Buffet</button>
      </div>
      <div className="locator">
        <div className="locator-panel">
          <div className="filters">
            <label className="search-field">
              <SearchIcon />
              <input type="search" placeholder="Tên cửa hàng" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <div className="filter-row">
              <select className={province ? undefined : "is-placeholder"} aria-label="Khu vực" value={province} onChange={(event) => { setProvince(event.target.value); setDistrict(""); }}>
                <option value="">Khu vực</option>
                {provinces.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
              <select className={district ? undefined : "is-placeholder"} aria-label="Quận/huyện" value={district} onChange={(event) => setDistrict(event.target.value)}>
                <option value="">Quận/huyện</option>
                {districts.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>
            <button
              className="linkish"
              type="button"
              onClick={() => {
                setName("");
                setProvince("");
                setDistrict("");
              }}
            >
              Xóa bộ lọc
            </button>
          </div>
          <div className="store-list">
            {rows.length === 0 && <p className="empty-note">Không tìm thấy cửa hàng phù hợp.</p>}
            {rows.map((store) => {
              const photos = (store.images || []).slice(0, 5);
              return (
                <div
                  className={`store-item${store.id === activeId ? " active" : ""}`}
                  role="button"
                  tabIndex={0}
                  key={store.id}
                  onClick={() => setSelectedId(store.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedId(store.id);
                    }
                  }}
                >
                  {photos.length > 0 && (
                    <div className="store-photos">
                      {photos.map((src) => (
                        <img key={src} src={src} alt="" />
                      ))}
                    </div>
                  )}
                  <strong>{store.name}</strong>
                  <p className="store-line"><PinIcon /><span>{store.address}</span></p>
                  <p className="store-line"><PhoneIcon /><span>{store.phone}</span></p>
                  <a
                    className="directions"
                    href={directionsUrl(store)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Chỉ đường
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="map-pane">
          {rows.length === 0 && <p className="empty-note">Chưa có cửa hàng trong bộ lọc này.</p>}
          {rows.length > 0 && mapSrc && (
            <iframe title={active.name} src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          )}
          {rows.length > 0 && !mapSrc && <p className="empty-note">Chọn một cửa hàng để xem bản đồ.</p>}
        </div>
      </div>
    </>
  );
}
