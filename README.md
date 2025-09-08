# curso_dev

npm install

docker compose -f infra/compose.yaml up -d
docker compose -f infra/compose.yaml down

npm run dev

npm run test:watch

npm run test:watch -- migrations

# Link

https://vercel.com/rodrigo-vitals-projects/curso-dev


https://console.neon.tech/app/projects/jolly-cake-34607751?branchId=br-lively-base-adoxc9tb


https://curso-dev-ten-zeta.vercel.app/api/v1/status

alteração realizada.


curl -s -X GET https://curso-dev-git-fix-migration-endpoint-rodrigo-vitals-projects.vercel.app/api/v1/migrations | python3 -m json.tool

curl -s -X POST https://curso-dev-git-fix-migration-endpoint-rodrigo-vitals-projects.vercel.app/api/v1/migrations | python3 -m json.tool


curl -s -X DELETE https://curso-dev-git-fix-migration-endpoint-rodrigo-vitals-projects.vercel.app/api/v1/migrations | python3 -m json.tool


curl -s -X GET https://curso-dev-git-fix-migration-endpoint-rodrigo-vitals-projects.vercel.app/api/v1/status | python3 -m json.tool