export async function getAllDevices() {
  const response = await fetch("https://orion-apiv1.vercel.app/device");

  if (!response.ok) {
    throw new Error("Failed to fetch devices");
  }

  return response.json();
}

export async function getDeviceByBrand(brand) {
  const response = await fetch(`https://orion-apiv1.vercel.app/device/brand/${brand}`);

  if (!response.ok) {
    throw new Error("Failed to fetch devices by brand");
  }

  return response.json();
}
