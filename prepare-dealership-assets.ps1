param([Parameter(Mandatory=$true)][string]$ManifestPath)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$assetMap = Get-Content -LiteralPath $ManifestPath -Raw | ConvertFrom-Json -AsHashtable
$targetDirectory = Join-Path $PSScriptRoot 'public/images/dealership'
$jpegEncoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'
foreach ($asset in $assetMap.GetEnumerator()) {
  $destination = Join-Path $targetDirectory ($asset.Key + '.jpg')
  if ((Test-Path -LiteralPath $destination) -and ((Get-Item -LiteralPath $destination).LastWriteTimeUtc -ge (Get-Item -LiteralPath $asset.Value).LastWriteTimeUtc)) { continue }
  $bitmap = [System.Drawing.Image]::FromFile($asset.Value)
  $parameters = [System.Drawing.Imaging.EncoderParameters]::new(1)
  $parameters.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality, [long]88)
  try { $bitmap.Save($destination, $jpegEncoder, $parameters) }
  finally { $bitmap.Dispose(); $parameters.Dispose() }
  Write-Output ($asset.Key + ': ' + (Get-Item -LiteralPath $destination).Length + ' bytes')
}
